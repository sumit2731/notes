import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed} from '@angular/core/testing';
import {CoursesModule} from '../courses.module';
import {DebugElement} from '@angular/core';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CoursesService} from '../services/courses.service';
import {HttpClient} from '@angular/common/http';
import {COURSES} from '../../../../server/db-data';
import {setupCourses} from '../common/setup-test-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {click} from '../common/test-utils';




describe('HomeComponent', () => {

  let fixture: ComponentFixture<HomeComponent>;
  let component:HomeComponent;
  let el: DebugElement;
  let coursesService: any;
  const beginnerCourses = setupCourses().filter(course => course.category == 'BEGINNER');
  const advancedCourses = setupCourses().filter(course => course.category == 'ADVANCED');

  beforeEach(async((() => {
    // Home componenets calls only findAllCoures hence we have included only that
    //in our spy object
    const coursesServiceSpy = jasmine.createSpyObj('CoursesService',['findAllCourses']);
    TestBed.configureTestingModule({
      /* 
      Here we import CoursesModule which contains all components that our HomeComponent
      needs. alternative way would be list all components needed here test by test.
      if your application is already split up in lazy loaded modules then here you need to
      import here only that module, which contains the component which is being tested.
      otherwise if you application is very large please consider here importing components
      one by one

      we imported NoopAnimationModule because angular material components are using some 
      animation. In app.module which uses CoursesModule we import broserAnimation module.
      In test we dnt want any animation , but we dnt use any animation module then angular 
      material components will fail. hence we use NoopAnimation, it solves this problem
      */
      imports: [CoursesModule,NoopAnimationsModule],
      /* 
      we do not want our component to use actual isntance of coures component because
      real instnace will trigger http calls. so we replace it with our mock implementation
      of coursesService. note that we dnt do it then coursesModule is providing the courses
      service, we dnt define it here then that instnace will be used
      */
      providers: [{provide: CoursesService, useValue: coursesServiceSpy}]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      coursesService = TestBed.get(CoursesService);
    });

  })));

  it("should create the component", () => {
    expect(component).toBeTruthy();

  });


  it("should display only beginner courses", () => {
    /* 
    *Note this is synchrnous, our mock coursesService will return data immediately
    when our component calls findAllCourses. of emits values immediately.itis not
    asynchrnous. there no steTimeouts, no promises invloded in use of "of". In this
    way we know that after calling detect changes data has been applied to DOM
    so till now there is no asynchrnous thing happening in our tests
    */
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    /* 
    *It synchronously calls chnage detection mechanism of angular
    and any chnages will be reflected in DOM. this is here ngInit will be called.
    constructor has been called already
    */
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(1,"Unexpected number of tabs found");

  });


  it("should display only advanced courses", () => {
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(1, "Unexpected number of tabs found");

  });


  it("should display both tabs", () => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    expect(tabs.length).toBe(2, "Unexpected number of tabs found");
  });


  it("should display advanced courses when tab clicked", fakeAsync(() => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    /* 
    *Now we want to click on advance tabs. here we have cople of alternatives
    first option is to use debugElement of component. 
    First way is to get NativeElement thn use click function of DOM API
    second function is use triggerEventHandler on debugElement
    */
    //  el.nativeElement.click();
    click(tabs[1]);
    //tabs[1].nativeElement.click();
    /* 
    *Here even after calling detectCgnages, we are not able to get cardTitles
    we will see in next section what is problem and how we can solve it.
    */
    fixture.detectChanges();
    /* 
    *Here when we click on tabs cotainer componenet it is performing async operation while
    switcing tabs. there is small animation after clicking. it is produced by browser api
    requestAnimationFrame. this is one of many browser async api. other exmaple is setTimeout.
    immagin tabs-container is making call to setTimeout beofre switching tabs, that would make
    component asynchronous.

    so here problem is after triggering click tab, the tab-container component which we are
    using in home component which is mat-tab-group , this component is internally using call to
    requestAnimationFrame. it means chnages to DOM will  to not be applied immediately after calling
    detectChanges. so even thorugh we clicked the tab and asked angular to apply the latest chnages 
    to DOM, component will not apply those chnages immediately, synchronously to DOM.thne contianer is
    first going to wait for callback passed to requestAnimationFrame to complete before applying
    the changes to DOM. it means we cannot right our assertions immediatley after calling detechChanges.
    */
   /* 
   *One way is to use place assertions inside SetTimeut. then these assertions will run ouside it block.
    test runner will execite thi block and it was not ble to find any assertions in this block so it considered
    test as being passed. so these assertions are never executed before considering test to be completed.
    after 5 seconds when there are no test being run, only then these assertions were executed. this is
    not what we want. we want tets runner to wait to execute these assertions before considering this test
    to be completed and moving to next test. to support this we recevice a paramter in callback of it fucntion.
    it is type DoneFn. this function is supposed to be called whenever our synchronous test is completed.
    
    if we provide done as callback but dnt eexecute then we will get error. that "async fucntion was not called
    within setTimeout" 

    This means that jasmine whenever it excutes the callback passed to if, will not immediately consider the
    test finished when the block exits. so instead jasmine will considered this tets completed and move to
    next block when we call the done callback. so we call done inside setTimeout. now our test case is passing,
    but use of setTimeout is not very convineint. we dnt want to have any nested blocks.lets see in what are multuple test
    utilities that angular provides o write async tests in more maintainable way. see async-exmaples.spec.ts.
    let's comment out this code and look for some better approach
   */
    
  //  setTimeout(() => {
  //     /* 
  //     Here i faced a problem, even after tab is inactive its content is not removed, but you cannot see that in
  //     chrome dev tools. so here i have to chnage a selector.
  //     */
  //     const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
  //     expect(cardTitles.length).toBeGreaterThan(0,'Could not find Card Titles');
  //     expect(cardTitles[0].nativeElement.textContent).toContain('Angular Security Course');
  //     // If we do not call done, then test will timw out and will be cosidered as failed
  //     done();
  //   }, 500);
  
  /* 
  *Here we are writing the test in synchronous way. this will be ideal way to write our test,this
  type of test looks like normal test for synchronous. our test is in readable way and most of all
  we are not aware of internal details of the component that we are testing. we don't know in this
  type of code if component calls requestAnimationFrame,setTimeout or any other asynchronous API.
  we simply test the functionality just like if it is synchronous fucntionality. it is possible to 
  write it using fakeAsync code.

  we wrap our fucntion inside fakeAsync, this will wrap all code inside inside this test inside
  a fakeAsync testing zone. now this zone is going to keep track of all the asynchronius operations
  launched by code inside our test block and this includs the the call to requestAnimationFrame made
  by our course-list-component. 
  now if we run our code, we will get eror, taht security course cannot be found, but we will also see error,
  that 1 timer is still in queue. so it means fakeAsync detected the asynchronous code.
  
  now we dnt have any details about what is this type of timer. we dnt need these details for testing
  this asynchronous code. we know that some timer was triggered here by the componeent that we are testing
  and we know that before running assertions we want to make sure that the task queue is completely empty
  befoe going forward. so we use flush() to empty task queue. so timer has been removed from tasks queue.
  now fakeAsync can consider this test as completed.

  note that if we use flushMicroTasks then our test is not completed and still we will get error
  that 1 timer is in queue. so we know that asynchronous operstion that this component is launching is not
  microtasks, it cannot be a promise for example, it has to be soemthing else. It has to be instead
  a normal browser tasks such as setTimeout,setInterval, or in this particular case a, call to
  requestAnimationFrame.
  i would recommned using fakeAsync to write test for asynchronous operations whenever possible,
  because you get most flexibiity and you can write synchronous looking test that are easy to maintain
  and reason about.now there are some parrticular cases where it is not possible to use fakeAsync, this
  should be very rare. and also we can see that in beforeEach block we are using async. async is another
  angular utility that is used for writing asynchronous tests. this is alternative to fakeAsync.
  
  next we will compare theese 2 and see whne to us ewhch one.
  */
  flush();
  const cardTitles = el.queryAll(By.css('.mat-tab-body-active .mat-card-title'));
  expect(cardTitles.length).toBeGreaterThan(0, "Could not find Card Titles");
  expect(cardTitles[0].nativeElement.textContent).toContain('Angular Security Course');
  
  }));
  /*
  here we will talk about alternative to fakeAsync testig zone. it is async testing zone and we are using
  it in beforeEach block of our code. so how does asunc work.

  it is actually very similar to fakeAsync testing zone.  async also wraps our code in test zone.this
  test zone is very similar to fakeAsync but it works in fundamentally differernt way. so just like
  fakeAsync test zone, async test utility is going to detect any asynchronous operations that are made
  in code block which it is wrapping. like in before each it knows that that code block has a promise,
  so it is going to wait for promise to get evaluated(then blcok to be executed) before considering
  beforeEach block is completed. this is very similar to what fakeAsync does.

  lets write last test case again and lets use async instead of fakeAsync.

  *If we run as it is, it will fail with- error you need to be in fakeAsync zone to call this function
   to call this function. we cannot call flush, tick inside async. it means we have no control over
   emtying tasks and micro tasks queue. we also cnt call tick and control the passge of time inside
   test
    so lets remove these.

   if we run test now, w ecan see that "Angular Security"code is failing,it is like we never clicked on
   advaced courses tab. let us understand why.

   async does not allow us to write our asserions in synchronous way like fakeAsync does. instead async
   test zone is going to keep track of any asynchronous operations created by our code such as setTimeout,
   setIntereval, promises and async test zone is then going to give us a callback that is going to notify
   us when all those asynchronous operations are completed. using that callback we will then be able to run
   our test assertions and confirm if our test is passing or not .In order to get access to the
   callback we are going to use here the testFixture. we have api called whenStable,so this is callback
   which async test zone is going to call whenever all asynchronous operations(that test zone has detected
   inside the code that it is wrapping) are completed. so if we would have several calls to setTimeouts,
   promises,requestAnimationFrame etc, when all those asynchronous operations are completed, only then 
   this callback will be executed.

   This callback returns us a promise, so in then block we can have any code that we want to run after
   async operations are completed. here generally we want to write assertions.

   so this was async, we can see that it is not as convinient as fakeAsync because-
    1)we do not have cotrol over emptying of micto tasks and tasks
    2)We do not have control over passage of time
    3)We cannot write test in synchchronous way, and there is some nesting
  also using async we have fine grain control and we can test intermediate state, which is not possible
  using async, becaus there we have only 1 callback, whcih will be called whne all the operations are
  resolved. so w ecannot test intermediate state using async.

  Question is why asunc does even exists and why we are using it. one fmajor eature that async has and
  fakeAsyn does not is async supports real http calls. so if by some resons you need to write a test
  that is actually not a unit test but for example integration testthat is doing actual http calls to backend,
  that woud not be possible with fakeSync. the goal of fakeAsync is to write our code in fully synchrnous
  way and having our component do actual http call to backend would not allow us to to that. so if we have
  to test a component that is doing a actual backend call, then w ehave to use async test zone and not fakeAsync

  now there are some situations when In even a unt test and not in integration test, we need to do an actual api call
  .for smore diffrenecs see lecture 34 from 08:30
  */
  it("should display advanced courses when tab clicked -async", async(() => {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css(".mat-tab-label"));
    click(tabs[1]);
    fixture.detectChanges();
    /* 
    * This promise will be resolved when all asynchrnous operations
    * detected by async are resolved
    */
    fixture.whenStable().then(() => {
      console.log("inside whenStable");
      const cardTitles = el.queryAll(By.css(".mat-tab-body-active .mat-card-title"));
      expect(cardTitles.length).toBeGreaterThan(0, "Could not find Card Titles");
      expect(cardTitles[0].nativeElement.textContent).toContain("Angular Security Course");
    });
  }));

  it("This for testing", () => {
    expect(true).toBeTruthy();
  });

});


