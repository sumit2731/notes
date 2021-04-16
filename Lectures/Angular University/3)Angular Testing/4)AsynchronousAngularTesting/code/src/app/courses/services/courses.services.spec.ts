import { CoursesService } from "./courses.service";
import { TestBed } from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { COURSES, findLessonsForCourse } from "../../../../server/db-data";
import { Course } from "../model/course";
import { HttpErrorResponse } from "@angular/common/http";

describe('CoursesService',() => {
                    /*
                    *So in order to be able to specify test data for our Http request we're
                    going to be needing the HttpTestingController
                    */
                    let coursesService: CoursesService;
                    let httpTestingController: HttpTestingController;
                    beforeEach(() => {
                        /* TestBed allows us to implement a angular
                            Testing module that will contain instance of
                            our service
                        */
                        TestBed.configureTestingModule({
                          /*
                            one of things thta we need is provider for CoursesService and because
                            we are testing CoursesService, so we need actual instance of CoursesService.
                            so lets add constructor function of service to te list of providers.now we can
                            use Testbed to retreive instance of coursesService(here we pass indetifier of
                            the injectable that we need to get method, here identifier is constructor function
                            itself)-

                            coursesService = TestBed.get(CoursesService);

                            but there is one problem, courses service has a dependecy - HttpClientService
                            so we also need to add an instnace httpClient in our module configuration. but if we
                            do it like, courseService then our test will start making actual httpCalls. this is not
                            what we want in unit tests.instead we want to provide mock implementation of http client,
                            that is going to return test data, that we can define at the level of the test.

                            so in order to replace httpClient wth new mock implementation, we are import HttpClientTestingModule.
                            This module includes the mock implementation of httpClientService.That mock implementation will get
                            injected in constructor of CoursesService.
                            
                            this mock implementation has all methods that real httpClient service has(get, put post etc) but instead 
                            of issuing actual http request the mock implementation of httpClient is going to return test data, that we
                            are going to define for each test.mock implementation of Http client will also allow us to assert things
                            such as for example that a given Http request was only issued once and not multiple times and the HTTP 
                            request was not cancelled etc.
                            */
                          imports: [HttpClientTestingModule],
                          providers: [CoursesService]
                        });
                        coursesService = TestBed.get(CoursesService);
                        /* 
                        In order to specify test data for our http test we need HttptestingController
                        */
                        httpTestingController = TestBed.get(HttpTestingController);
                    });

                    it('Should Retrieve all courses', () => {
                        coursesService.findAllCourses().subscribe((courses) => {
                            //it means course are null or undefined
                            expect(courses).toBeTruthy('NO Courses is returned');
                            expect(courses.length).toBe(12,'Incorrect nuber of courses');
                            const course = courses.find(courses => courses.id == 12);
                            expect(course.titles.description).toBe('Angular Testing Course');
                        });
                        /*
                        Here we spcify how findAllCourses method returns some data , for that we need httpTestinfController.
                        here we looked at api of HttptestingController. it has several expect methods,these methods allow us to
                        assert that certain Http Request has been made or not by our service. find allcourses expect only
                        one api call to be made. that api call is get call. so we assert that by grabbing instance of that request
                        and  expect it to get request.then using flush method we specify what kind of data our mock httpClient  
                        implementaton should be returning.api had retruned note fake http call mocks response only we call flush method
                        on req instance
                        
                        this is how this test is going to be executed-
                        here we call findAllCourses but subscribe block  will not get data immediately
                        this is because findAllCourses is using mock implementation of httpClient, which will
                        not issue actual http request, hten using httpTestingController, we are going to create
                        a mock httpRequest and then we are going to have it return some data by calling flush.
                        so only when flush call is made, only then mock http request will simulate a response
                        which is going to be passed to subscribe block.
                        */
                        const req = httpTestingController.expectOne("/api/courses");
                        expect(req.request.method).toEqual("GET");
                        req.flush({ payload: Object.values(COURSES) });
                    });

                    it('should find a course by id', () => {
                        coursesService.findCourseById(12).subscribe((course) => {
                            expect(course).toBeTruthy();
                            expect(course.id).toBe(12);
                        });

                        const req = httpTestingController.expectOne('/api/courses/12');
                        expect(req.request.method).toEqual('GET');
                        req.flush(COURSES[12]);
                    });

                    it('should save the course', () => {
                        const changes: Partial<Course> = {
                          titles: { description: "Testing Course" }
                        };
                        coursesService.saveCourse(12,changes).subscribe((course: Course) => {
                            expect(course.id).toBe(12);
                        });

                        const req = httpTestingController.expectOne('/api/courses/12');
                        expect(req.request.method).toEqual('PUT');
                        /* Here we are validating the body of request  */
                        expect(req.request.body.titles.description).toEqual(changes.titles.description);
                        req.flush({...COURSES[12], ...changes});
                    });

                    it('Should give error if save course fails',() => {
                        const changes: Partial<Course> = {
                          titles: { description: "Testing Course" }
                        };
                        coursesService
                          .saveCourse(12, changes)
                          .subscribe(
                               () => {
                                   console.log("call is in sucess callback");
                                   fail("This call should have failed");
                               },
                               (error: HttpErrorResponse) => {
                                   expect(true).toBeTruthy();
                                   //expect(error.status).toBe(500);
                               }
                          );

                          const req = httpTestingController.expectOne('/api/courses/12');
                          expect(req.request.method).toEqual('PUT');
                          /* 
                          here we are failing the request. we are passing some data that
                          go in request body. we can allo pass null or undefined, but lets add
                          here some message, then in next message we pass some information on why
                          this request failed.

                          It is error because we set status to 500, if we set status to 200 keepig other
                          things unchanged, then it is success
                          */
                          req.flush('Save course failed', {status: 500, statusText: 'Internal server Error'});
                    });

                    it('should find a list of lessons', () => {
                        coursesService.findLessons(12).subscribe(courses => {
                            expect(courses).toBeTruthy();
                            expect(courses.length).toBe(3);
                        });
                         /* here this will not work, because we have some queryParameters in
                         request 
                         */
                        //const req = httpTestingController.expectOne('/api/lessons');
                        /* 
                        *So here we pass a fucntion to expectOne, if that fucntion return true
                        then condition is specified. inside this function we can  have things also
                        like headers, parametes etc. see api of httptestingController
                        */
                       
                        const req = httpTestingController.expectOne(req => {
                           return req.url == '/api/lessons';
                       });

                       expect(req.request.method).toEqual("GET");
                       expect(req.request.params.get('courseId')).toEqual("12");
                       expect(req.request.params.get("filter")).toEqual("");
                       expect(req.request.params.get("sortOrder")).toEqual("asc");
                       expect(req.request.params.get("pageNumber")).toEqual("0");
                       expect(req.request.params.get('pageSize')).toEqual("3");
                       req.flush({
                           payload: findLessonsForCourse(12).slice(0,3)
                        });
                    });

                    /* 
                    *It is executed after each IT block
                    */
                    afterEach(() => {
                        /* 
                        *It means only that http requests are made that we have matched using httpTestingController.
                        If any other http request(that is not matched by httpTestingConroller) is
                        made then our test case will fail
                        */
                        httpTestingController.verify();
                    });
            });