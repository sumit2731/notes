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




fdescribe('HomeComponent', () => {

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


  it("should display advanced courses when tab clicked", () => {
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
    /* 
    *Here even after calling detectCgnages, we are not able to get cardTitles
    we will see in next section what is problem and how we can solve it.
    */
    fixture.detectChanges();
    const cardTitles = el.queryAll(By.css('.mat-card-title'));
    expect(cardTitles).toBeGreaterThan(0,'Could not find Card Titles');
    expect(cardTitles[0].nativeElement.textContent).toContain('Angular Security Course');
  });

});


