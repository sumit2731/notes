import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';
import { MatDialog } from '@angular/material/dialog';




describe('CoursesCardListComponent', () => {
  /* 
  * here we define series of variables that we will use through out the tests
  */
 // this is a component isntance that will be used in test cases. it is unique
 //for each tests
  let component : CoursesCardListComponent;
  /* 
  *In order to create a component instance we need a component fixture
  omponent fixture is test utility type that is going to help us to do
  some common test operations such as obtaining instance of component,
  debugging the component etc. then we look at api of componentFixture
  we saw compoentInstane(to get component isntance),debugElement(for
  debugging capabilities , that we wil be exploring later), detectChanges
  (for manually triggering chnage detection in component, in order to update
  the componet with latest data chnages), nativeElement(to access native DOM
  element of component if required).

  so fixture type is utility type that helps us to bring togather lot of
  features that we will be needing for testing a component. It is 
  */
  let fixture: ComponentFixture<CoursesCardListComponent>;

  /* 
  this is testing utility that is needed to query the DOM
  inside component test 
  */
  let el: DebugElement;
  /* 
  *Here we are uisng Angular testing utility async because we
  want to execute test cases only when our componets instances are compiled.
  this utility is designed specifically to solve this problem. to synce we pass
  callback that we previously passed to beforeEach. this is how async works, it waits
  for any aync operations triggered by fiucntion passed to it, to complete. so sync is going to
  wait for predefined amount of time, be defualt that is timeout of 5 seconds for any asynchrnous
  operations launched  by this code test block to complete. this means async is going to keep
  track of any timeputs or promises or any ther browser asynchrunous operations triggered
  by this code, and sync is then by defualt going to wait for 5 seconds for all those operations to
  complete, before cosnidering beforeEach step has been completed

  here only synechrnous operation is promise, so here async is going to detect the promise
  and is going to wait for promise to complete. now because compilation of our components takes
  lot less than default timeout of 5 seconds(that can be chnaged if required), that means then blocks
  will be excuted before forEach block is considered to be completed and before any test case
  is executed.now our problem is solved.

  now notice that there are other ways of setting up components tests. by defualt cli will suggest
  you to split this beforeEach block into 2 diffrent steps. one asynchrouns block for configure this testing
  module and synchronus block for setting these test variables, i.e code in then block. i recommend
  to use this consolidated approach, where we have only one async block before beforeEach block and we
  initialize our testing variable in then block of promise returned by comipleComplonenst

  now we can also wraps callback of it block in async(see definaton). docs say-
    Wraps a test function in an asynchronous test zone. The test will automatically
    complete when all asynchronous calls within this zone are done. Can be used
    to wrap an {@link inject} call.

  
  */
  beforeEach(async(() => {
                     /* 
    *Here we need to add everything that our component needs to run
    *Any services it needs will be provided via poviders, here we 
    dnt need any. we will need them in case of providers component.

    In case of presentational component we only need to declare here
    component itself and any components that this component uses internally.
    so here we need to add mat-card compoennt and other material directives that
    are used by our components. we also use routerDirective. it would be very time
    consuming to configure that for every component that we want to test, because every
    component has slightly different set of dependecies. so instead of declaring components
    here one by one we are going to instead import here a module that already contains
    all the components our application might need.

    lets look at configuration of main application module i.e app.module.ts. there
    we can see that only component we declared is app.component(which is root component).
    then we can see in imports it is importing all components that our application needs via
    courseModule. if we open courseModule, then in declaration section we can see that all. we also 
    provide some services there. in order to configure our testbed in simple way, we just import
    course module.this will brig not only CourseCardListComponent but also all needed angular
    material modules that CourseCardListComponent needs.

    so we can see that use of common shred module named coursesModule, ake sit very easy to configure
    our test bed. so In order for this to work, it's important that courseModule only imports CommonModule
    this modules has directives like *ngFor,*ngIf etc. whuch are used by almost all components. we can see
    that unlike application root module we dnt have anything on courses module that would prvent our test
    from running, for exmaple browser specific modules like browserModules and browserAnimationModules
    also courses module does not include httpClient module. so its very easy to take this module
    and import it in our testBed configuration in order to have everything that this componets needs
    to execute in this testing envirenment.
    */
                     TestBed.configureTestingModule({
                       /*
                        * Not needed coursesModules declares this component
                        */
                      //  declarations: [CoursesCardListComponent]
                        imports: [CoursesModule]
                     })
                       /* 
                        Now we have configured for test module. now we can
                        go ahead and call compile components.
                        *It retruns proise which will be resolved when our
                        complilation process is completed. you might think that calling
                        compilecomponents ensures that all the components are immediately compiled
                        immediately synchronously but that is not the case.the compilation of angular
                        components is asynchrnous process that in certain might trigger external Http 
                        request to fetch html tempates, style sheets etc. so only save way to execute
                        some code after comilation is finished is to use then block and wait for promise
                        to resolve
                        */
                       .compileComponents()
                       /* 
                        Inside this then block we will setup pur tests
                        */
                       .then(() => {
                         fixture = TestBed.createComponent(
                           CoursesCardListComponent
                         );
                         //here we use fixture to grab instnace of component
                         component = fixture.componentInstance;
                         el = fixture.debugElement;
                       });
                   }));

  it("should create the component", () => {

   expect(component).toBeTruthy();

  });

  /* 
  *Note here test is synchrnous. we update proeprty of compoennt , call detect chnages,
  DOM is updated and then we query the DOM. as it was synchrnous we did'nt need testing uitlies
  like async and FakeAsync. so if we dnt need them then dnt use them
  */
  it("should display the course list", () => {
    /* 
    *First we interact with component api and pass it some data in order to get displyayed
    next we wnat to make sure that data is present in DOM by querying the DOM and asserting
    that data is there
    */
    component.courses = setupCourses();
    /* 
    *After assigning data to any component via input property
    we need tonotify the component that some chnage sare made. we need
    to trigger the component change detection mechanism. this chnage detection mechanism
    is going to look for chnages in this case in  any template expressions of component. if
    any chnage is detected then dom will be updated with new change
    */
   fixture.detectChanges();
    /* now we want to make sure that data is gettig displayed on screen
    each card will have class named "course-card", see html of component. so we will query the DOM for
    elements having thsi css class.

    to queryAll we pass matching predicate. By is tesing utility that makes it easier to  create predicate
    to identify a DOM element.predicate is fucntion tat return true or false, depending upon if
    a given DOM element matches a certain condition
     */
    /*
    name like p,h1
    console.log(el.name);
    All the proeprties that are on DOM element
    console.log(el.properties);
    All Classes on element
    console.log(el.classes);
    console.log(el.attributes);
    style object which contains styles applied
    console.log(el.styles);
    this is actual DOM object, you all acccess all proeprties, like innerHTML,OuterHtml
    console.log(el.nativeElement);
    */
    let cards = el.queryAll(By.css('.course-card'));
    expect(cards).toBeTruthy("Could not find cards");
    expect(cards.length).toEqual(12,"Unexpected number o courses");

  });


  it("should display the first course", () => {
    component.courses = setupCourses();
    fixture.detectChanges();
    const course = component.courses[0];
    const card = el.query(By.css('.course-card:first-child'));
    const title = card.query(By.css("mat-card-title"));
    const image = card.query(By.css('img'));
    expect(card).toBeTruthy('Could not find course card');
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);

  });


});


