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
                            Testing module that will contain instnce of
                            our service
                        */
                        TestBed.configureTestingModule({
                            /* 
                            *We import this module because we want to replace
                            httpClient service with mocking implementation and not
                            actual instnace, because actual HttpClient will make api calls.
                            HttpClientTestingModule includes mock implementation
                            of httpClient Service. this mock implementation has all methods
                            that real httpClient srvice has and it returns test data.
                            mock implementation of Http client will also allow us to assert things
                            such as for example that a given Http request was only issued once and not 
                            multiple times the HTTP request was not cancelled etc. we imported this module
                            here, now courses service will get injected with mock implementation of
                            HttpClient and not real HttpClient
                            */
                            imports: [HttpClientTestingModule],
                            providers: [CoursesService]
                        });
                        coursesService = TestBed.get(CoursesService);
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
                        Here we spcify how findAllCourses method returns some data
                        *Here we make sure that our service methods returns some data
                        for that we need HttpConroller.here we looked at api of
                        testingController. it has several expect methods,
                        these methods allow us to assert that certain Http Request has
                        been made or not by our service. find allcourses expect only
                        one api call to be made. that api call is get call. so we assert that
                        grabbing instance of that request and  expect it to get request
                        then using flush method we specify what kind of data our
                        api had retruned
                        note fake http call mocks response only we call flush method
                        on req inatance
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
                               () => fail("This call should have failed"),
                               (error: HttpErrorResponse) => {
                                    expect(error.status).toBe(500);
                               }
                          );

                          const req = httpTestingController.expectOne('/api/courses/12');
                          expect(req.request.method).toEqual('PUT');
                          /* 
                          here we are failing the request. we are passing some data that we 
                          go in request body. we can aslo pass null or undefined, but lets add
                          here some message, then in next message we pass some information on why
                          this request failed
                          */
                          req.flush('Save course failed', {status: 500, statusText: 'Internal server Error'});
                    });

                    it('should find a list of lessons', () => {
                        coursesService.findLessons(12).subscribe(courses => {
                            expect(courses).toBeTruthy();
                            expect(courses.length).toBe(3);
                        });
                        // here this will work, because we have some queryParameters in
                        //request
                        //const req = httpTestingController.expectOne('/api/lessons');
                        /* 
                        *So here we pass a fucntion to expectOne, if that fucntion return true
                        then condition is specified. inside this function we can  have things also
                        like headers, parametes etc
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
                        *It means only that http request is amde that we have
                        specified uing expectOne. if any other http request is
                        made then our test case will fail
                        */
                        httpTestingController.verify();
                    });
            });