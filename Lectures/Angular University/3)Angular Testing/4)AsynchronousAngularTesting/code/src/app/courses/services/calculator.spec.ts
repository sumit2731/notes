import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { TestBed } from "@angular/core/testing";

/* 
In Jasmine test are known as specifications or specs and they are grouped in test suites.
Test suite is defined using 'describe' and specs are defined using 'it'.
'spec' extension is essential for angular cli to be able to compile our tests and to
add types that we need to write them

Using describe ,we give name to our test suite,
the function will contain series of specifications, group of specifications is called
suite. specififcations is simply a functional test. so specification is meant to test specific functional
fetaure of our appication
*/

describe('CalculatorService', () => {
        /* 
        These variables are declared outside beforEach, because variables declared inside
        beforeEach block are not visible outside beforeEach Block
        */
        let calculator: CalculatorService;
        let loggerSpy: any;
    // All initialize logic should be moved here
    // it will be called once before each spec(it block)
    beforeEach(() => {
        /*  here we will get different instances of services in diffrent tests.
        this ensures that our tests are independent of each other and can be
        executed in any order. This is moved from first it block to here, for explanation
        see notes above same coomented out code in first it block
        */
        loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
        /* 
        Dependency Injection is design pattern.Services and components receve their dependency
        at level of constructor, without knowing how these dependencies are created or from where
        they came from. service or component does not have the responsibility of creating its
        dependency itself. we dnt create dependies like this in angular-
            let logger = new LoggerService();
        
        In angular all dependecies are passed directly in constructor, which explains the name dependency
        Injection.
        One of advantages of dependecy injeection is Testing. So if we want to test a service(CalculatorService)
        in isolation,separated from rest of application, we can provide it  via its constructor fake implementations
        of its dependecies(like we provide LoggerService)that are used for test purposes only(here we use SpyObject in
        place of LoggerService only for testing purpose). since angular uses concept of dependency injection everywhere
        it is recommended that we use the same notion in our tests.this will be useful especially when we are testing 
        components instead of services because that way angular is going to be able to provide fake implementaton of
        some of its internal services that is going to make it very simple for us to simulate DOM interaction in our test.

        Angular TestBed utility, it allows us to provide dependeicies to our services by using dependecy injection
        instead of using conctructor to create dependecies.we use method configureTestingModule.
        configureTestingModule takes a object, properties of this object are very similar to object that we pass to
        ngModule.As of now we are not using components,so we will use only providers part of TestBed. this is where
        we can provide services to our test bed. we are using actual instance of calculator service and fake loggerSpy for 
        LoggerService.

        Use of testbed will become more important when test complex services like Courses.Service.ts
        */
        
        TestBed.configureTestingModule({
          providers: [
            CalculatorService,
            { provide: LoggerService, useValue: loggerSpy }
          ]
        });
      
      // Commenting it out as we will now get instance by dependemcy injection
      /*
        Here we are using Actual instances of Calculator and Logger Service(Later this will be improved)
         here our service to be tested has only one dependency i.e LoggerService. LoggerService do not have any depndency
        calculator = new CalculatorService(new LoggerService); 
        */
        /*
        *instead of passing real instance of LoggerService,we are passing spy object to CalculatorService,
        *This will be improved later as we will get instance from TestBed
        */
        // calculator = new CalculatorService(loggerSpy);
        /* 
        To get method we pass unique identifier which identifies which service we want to retrieve.
        we should use depedecy injection pattren  in angular test as much as possible, because that is
        how whole frameowrk is designed.
        */
        calculator = TestBed.get(CalculatorService);
      });
    // to define test specification we use 'it' function, each specification is
    //described by it keyword, then we name it. this specification is for testing
    //add function. this should not be technical aspect of our application. here we testing just
    // a functional aspect
    it('it should add 2 numbers', () => {
        /*Let's see jamsine testing utilities-
         pending(); It tells jamsine that this suite is not ready to test. it will added to pending tests.
          we wnt get error because of this test.
         fail(); use it to fail test, if some condition is reached that should never reach
         */
        /* 
        Assertion utilities-
        a)expect(argumnet).somefucntion(some Vaue,description string)
            the description string is avalible on all assertion utilities
        */
       /* 
       Here we are creating actual instances of depenencies of the servivce, that we are testing
       this is just a example, usually what we want to do is provide mock or fake implementations of all
       direct dependencies of the services that we are testing. this is so that we keep our test as a plane
       unit test

       The only actual instance of service that should be present in unit test should be the service that
       is being tested. any other dependdency should be mocked and replaced with fake test implementation
       This is because we want to focus on service that is beight tested and nothing more. this is why a
       test like this is called unit test
       */
          //const logger = new LoggerService();
        /* 
        we are mocking or providing fake test implimentations of all its dependencies. Only service
        to be tested should be real.Here we created fake dependency using createSpyObj.first argument i.e 'LoggerService'
        is the name of spyObject , second arguments is array which contains list of methods  of our fake logger implementation.
        so now we have here complete fake implementation of loggerservice. This is object created by Jasmine that contains one method
        called log, this method is already spied on, so we dnt need  spyOn(logger.log).
        now actual methods of logger wnt be called, but this fake implementation will be called. 
        if we dnt provide name of methods(we give empty array as second argument) then jasmine will create fakeObject that has no 
        functions that we can call .In calculator service we are calling log method on loggerService, so we will get error on console while running
        unit tests.this code is commneted out because code is moved in beforeEach. from jamsine DOCS-

        In order to create a mock with multiple spies, use jasmine.createSpyObj and pass an array of strings. 
        It returns an object that has a property for each string that is a spy.
        
        */
         //const loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
         /* 
         *lets assume that we are using return value of our log function, now it wnt return any value
         because we are using fake implementation and this fake implementation does'nt know what to return.
         we can define return value like this-
         */
         //loggerSpy.log.and.returnValue(4);
         /* 
         *log methods does not return anything but if a methods returns some
         *sort of values, we can define it here using jamsine spy functionality by using
         and.returnValue. see interface SpyAnd and Calls(f12 on createSpyObj, then press f12 at Spy).
         there you can see what all things you can do with jasmin spies
         so here all calls to this function will return 1. we will see this concept later in
         course
         */
         //logger.log.and.returnValue(1);
         
         /* 
         Things that we can do with spies-
         a)we can keep track of number of times function is called
         b)we can provide fake implementation of function and define return value for that function
         c)We can either spy on existing object or we can create a complete mock implementation of
         our dependecy
         */
         
         /*
         *Here logger is actual instance of LoggerService(later we will use mock instance). we only want to keep track of 
          how many times, some of it's functions are called. we can do that by using spyOn utility of jasmine.
         *So first argument to spyOn is object that we want to spy on and second arguments is list of methods
          on which we want to spyon, here in our case we only want to spyOn single method. so what will happen here
          with the use of SpyOn is that jamsine is going to take the orignal spied object(logger) and then jamsine is going to
          replace some of its functions with a new function . so iN this case jamsine is going to take the instance of our logger
          and jamsine is going to replace log method with new method. this new implementation of log besides calling the orignal functionality
          (that is defined by developer), will also keep track of how many times the functiona has been called. we can
          use this information build test assertion, like shown below.
          
          now alternatively to providing an actual implementation of the dependency and then spying on it what
          we can do is to provide a complete fake implementation of loggerService, without creating actual
          instance.the later is preferred approach for implementing unit tests.

          so we can spyon existing object(like we are doing here)
          or we can create complete mock implementation of our implemetation, like we are doing in this test
          case us createSpyObj.
          note that if we now call logger.log, call will not go to actual fucnton, instead it will go to
          fake implementation. see this link - https://hatoum.com/blog/2016/11/12/jasmine-unit-testing-dont-forget-to-callthrough
          we do not need spyOn because now we are using spyObject,so jasmine is already spying on logger. 
          this was need when we were creating and using actual instance ofLoggerService.
          when we use spyOn , then it replaces log() with a stub which can only confirm that it was called and/or called with specific arguments
         */
          //spyOn(logger,'log');
          //expect(logger.log).toHaveBeenCalledWith('Rick');
          //expect(logger.log).toHaveBeenCalledTimes(1);
         const result = calculator.add(2,2);
         /* 
         *Test is passed or failed depending upon this
         */
         expect(result).toBe(4);
         expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
    it("it should subtract 2 numbers", () => {
        const result = calculator.subtract(2, 2);
        expect(result).toBe(0,"Unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
})