import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { TestBed } from "@angular/core/testing";

// Using describe ,we Give name to our test suite,
// the function will contain series of specifications, group of specifications is called
// suite. specififcations is simply a functional test. so specification is ment to test specific functional
//fetaure of our appication
describe('CalculatorService', () => {
        let calculator: CalculatorService;
        let loggerSpy: any;
    // All initialize logic should be moved here
    // it will be called once before each spec(it block)
    beforeEach(() => {
        console.log("before each calld");
        // here we will get diffrent insstances of services in diffrent tests
        // this ensures that our testa are independent of each other and can be
        // executed in any order
        loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
        /* 
        angular test bed utility, it allows us to provide dependeicies to our services 
        by using dependecy injection.
        proeprties configuration object is very similar to proeprties of object that 
        ngModule takes.
        as of now we are not using components so we will use only providers. this is
        where we can provide services to our test bed.
        we are using actual instance of calculator service and loggerSpy for LoggerService
        */
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })
        // Commenting it out as will now get instance by dependemcy injection
        // calculator = new CalculatorService(loggerSpy);
        calculator = TestBed.get(CalculatorService);
    });
    // to define test specification we use 'it' function, each specification is
    //described by it keyword, then we name it. this specification is for testing
    //add function. this should not be technical aspect of our application. here we testing just
    // a functional aspect
    it('it should add 2 numbers', () => {
        /* Lets see jamsine testing utilities-
         pending(); It tells jamsine that this suite is not ready to test, we will get error in cmd
         fail(); use it to fail test, if some condition is reached that should never reach
         */
        /* 
        Assertion utilities-
        a)expect(argumnet).somefucntion(some Vaue,description string)
            the description string is avalible on all assertion utilities
        */
       /* 
       Here we are creating actual instances of our depenencies of the servivce, that we are testing
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
        Here we created fake dependemcy. second arguments is list of methods that we want to
        keep in our fake implementation.
        now it is moved in beforeEach
        */
         //const loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
         // here we can specify return value for log method, but here it is not neede as our method
         // does not retun anything
         //logger.log.and.returnValue();
         
         
         /* 
         *So arguments are object that we want to spy on and second arguments is list of methods
          on which we want to spyon
          we do not need spyOn because now we jasmine is already spying on logger. this was need when
          we were creating actual instance of LoggerService
         */
          //spyOn(logger,'log');
          console.log("add Test");
         const result = calculator.add(2,2);
         expect(result).toBe(4);
         expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
    it("it should subtract 2 numbers", () => {
        console.log("subtract test");
        const result = calculator.subtract(2, 2);
        expect(result).toBe(0,"Unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
})