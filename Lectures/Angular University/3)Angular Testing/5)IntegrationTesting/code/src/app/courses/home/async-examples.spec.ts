import { fakeAsync, tick, flush, flushMicrotasks } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

describe('Async Testing Examples', () => {
    it("Asynchronous test examples with Jasmine done()", (done: DoneFn) => {
      /*
This approach is not very convinient and needs to be avoided
especially in more complex components that are using multiple
of these operations.consider a component which is doing multiple
timeouts, makes api call,It would be hard to know for how long
to wait. we might exceed the defualt timeout of jasmine test runner
for asynchronous test which is 5 seconds and most important our test
will become hard to read with multiple nested calls.this is true for 
componnets which have multiple asynchrnous components nested inside 
each other. alternative to this is fake async utility
*/
      let test = false;
      setTimeout(() => {
        test = true;
        expect(test).toBeTruthy();
        done();
      }, 500);
    });

    it("Asynchronous test example - setTimeout", fakeAsync(() => {
      let test = false;
      /* 
Ideally we would like to have some sort of mechanism that will execute
this complete test block but it will also detect the presence of asynchronous
operation(setTimeout,browser API's etc). That mechnaism will detect the execution
of these mutiple asynchronous calls and it would wait for all of those asynchroous
operation to complete before  considering test to be completed.

Angular is already doing that. it detects users clicks, setTimeouts etc and it
updates the DOM. so this thing is already built into angular's change detection mechanism.
so this notion which enables us to detect setTimeout, SetInterval etc, in order to
execute some functionality after thse events have taken place is called  in angular,
zones. so in angular zone is sort of context that survives multile asynchronous
operations. this is implemented by zone.js which is part of angular code base and
it is used internally by angular in its change detection.

so here we want some sort of testing utility that involves execution of our test in
zone. this zone will detect all browser asynchronous operations that are triggered
by these test block and our tetsing utility is going to wait for all those aynchronous
operations to complete before considering that this particular spec(It Block) is 
completed. so in a way ,it is very similar to jasmine done but it iis very flexible.
it will allow us to write test for components that launch multiple aynchronous 
operations, even if hey are nested.

best way to wrap our test execution in an angular zone is to use angular
fakeAsync test utility. we pass it a single argument which is our callback,
which contains our test code. now our tests are executed inside a angular zone.
fakeAsynce angular utility is now keeping track of all th asynchronous operations
that are getting launched specifically by our test block and nothing more in our
program . all settimeout, setInterval, operations that are being launched here
asynchronously by our test are accounted by fakeAsync zone.

if we run it like this we get error that 1 timer is still in queue. so we can see that
fakeAsync is detecting setTimeout in our code and it prevents test fom being marked as
completed.

now question is how do we get these assertions excuted. fakeAsync allow us to to
simulate the passage of time, so we can force the clock forward as much as we need
throughout the test in order to trigger for example functionalities such as code
inside setTimeout block.

if you are wondering how is it possible to control the passage of time only inside
test block, this is done in following way- fakeAsync is going to replace the browser
default implementation of the setTimeout with it's own custom function which simulates
the passage of time. to push clock forward we use tick api. tick can only be called
inside a fakeAsync zone. a argument we pass it a time, that defines by how much we
want to advance the clock forward.

as we can see that either we can move clock forward directly my 1000ms, or we can  move it
in increments, in between code we can execute code.note even if we move clock by 999, even
then our setTimeout code wnt be executed and we will get error, that one timer is still
in queue. you hve to move clock forward by 1000, in order to execute it. so tick condtrols
the evolution of time inside fakeAsync zone.

note that even if we take the clock forward by 2000 ms even then your code will be executed.

*/
      setTimeout(() => {
        console.log(
          "Excecuting assertion"
        );
        test = true;
        expect(test).toBeTruthy();
      }, 1000);

      tick(1000);

      // tick(500);
      // tick(499);
      // tick(1);

      //tick(2000);
      /* 
as we have called tick(1000) before so test is true and this
this assertion will pass. so it means we can move our assertion from body
of setTimeout and move it outside. this is main benefit of fakeAsync as
compared to done clabback of jasmine, that we dnt have to write assertion in
nested codeblocks
*/
      expect(test).toBeTruthy();
      /* 
*before going forward and learning how fakeAsync also works
with promises and observables. lets introduce a another api related
to tick function.
lets say we would not like necessarily to force the clock to move certain
amount of time forward, but instead we would like at this point in our
program to execute all the timers that are still pending.
using angular fakeAsync zone we can ensure that by calling flush api.
so by calling flush at this point in test we are executing all the timeouts
that were queued by the fakeAsync zone and because of that we can be sure that our
assertion will still be true(we we remove tick)
*/
      flush();
      expect(test).toBeTruthy();
      /* 
*Lets see how fake async works with components that uses internally
promise and observables 
*/
    }));
    /* 
    here we will see how we can test promises based code.

    but lets talk about importnat aspect of promises that is order in which they are executed by
    javascript run time as compared to other asynchronous operations such as setTimeoUt and setInterval.

    *go through code and see logging statements printed on console.
    Here we can see that Promise has some priority over an operation such as setTimeout.
    here even both of them do not have any delays, and promise statement is after settImeout
    even then log statement inside promise resolve is printed first. here even promise
    returned form first promise is resolved and then block is printed on console. only
    after all this,setTimeouts are printed on console

    Promises and setTimeouts are considered as 2 different type of asynchronous operations.
    Promises are considered a micro task and setTimeout is considered as macro task or simply
    a task.so the diffrenece between both is that macro tasks, lets call them tasks like setTimout,
    setInterval, ajax calls, mouse clicks and several other browser operations, all those
    aysnchronous operations will get added to event loop and between each of these macro tasks
    browser rendering engine is going to get a chance to update the screen. and this is unlike
    the case of micro tasks suhc as for example promsies. so promises are added to their own
    separate queue which is different than the queue where tasks such as for example setTimeout
    or setInterval are added.so these are 2 separate queues in javacsript runtime for asynchonous
    tasks- the micro tasks queue and tasks queue.
    
    With micro tasks such as for example these 2 promises here, between the execution of these 2 
    micro tasks the browser will not get the chance to update the view. so microtasks are more
    light weight and they allow our run time to be more responsive, If our code is heavily using 
    asynchronous operations such as for example promises.

    also between the execution of call stack statement and macro tasks queu statmeents, browser
    will get the chance to update the view.

    so here when browser is done with all statement in its calling stack, then browser is going to
    execute any statement which is in micro tasks queue. if that queue is empty only then it is going
    to macro tasks queue.

    so here browser executes all the statements in call stack, now it has stements in both micro task
    queue and macro tasks queue. it takes statements form micro tasks and puts them in calling
    stack and executes it.here again we put a statement in micro task queue(second promise which is resolved
    immediately, and code in then block is added to micro tasks queue)now browser do not have anything in 
    calling stack so it takes statement from micro queue and adds it to calling stack. hence second promises
    resolving statements are executed.now there is nothing in calling stack and there is nothing in micro 
    task queue. so tasks of macro queue are put into calling stack and executed.

    key take away is, browser run time has 2 different types of queues, for 2 diffrent types of asynchronous 
    operations. so some asynchronous operations are considered more light wieght such as promises and they go
    into the micro tasks queue. other asynchrnous operations such as for example setTimeout go into macro tasks
    queue.
    now lets see how we can use fakeAsync utiity to pass this tests.

    */

        /* it("Asynchronous test example - Plain Promise", () => {
        let test = false;
        console.log('Creatig Promise');
        
        setTimeout(() => {
            console.log('setTimeout() First callback triggered');
        });
        
        setTimeout(() => {
          console.log("setTimeout() Second callback triggered");
        }); 
        // here we are asusming that our compoents is using promises to
        // set value of flag to true.
        Promise.resolve().then(() => {
            console.log("Promise First then() Evalauated successfully");
            return Promise.resolve();
        })
        .then(() => {
            console.log("Promise Second then() Evalauated successfully");
            test = true;
        });

        console.log("Running Assertions");

        expect(test).toBeTruthy();
    }); */

    /* 
    * here we have removed steTimeouts from above commneted out test case. first we will see how to handle
    only promise based code with fakeAsync test utility. later we will see how to handle mixture of promise 
    and setTImeout.

    Our exmaple here is simulating a component, which is internally using promises.
    we have seen that using fakeAsync we can grab control of execution of time using tick and flush
    utilities. we solved setTimout problems using these.

    In our specific case what we would like to do is to somehow be able to execute all tasks in micro
    task queue before running the assertion. so we dont necessarily want to advance time or flush all
    the main tasks such as setTimeOut. so in order to be able to flush only the micro tasks queue
    where promises are and nothing more, we have testing utility called flushMicrotasks.

    when we use this utility then we can see that assertions are executed after our promise
    chain have been fully evaluated. so not only the first promise but also the second promise
    in our promise chain.so even if we set test = true, in second promise even then our testCase
    will pass.
    
    so all tasks in the micro task are going to be flushed and even if some of the tasks are
    schedules again a new promise, that promise is going to get added to the mico task queue and
    is also going to get executed.
    */
    it("Asynchronous test example - Plain Promise", fakeAsync(() => {
      let test = false;
      console.log("Creatig Promise");
      // here we are asusming that our compoents is using promises to
      // set value of flag to true.
      Promise.resolve()
        .then(() => {
          console.log(
            "Promise First then() Evalauated successfully"
          );
          test = true;
          return Promise.resolve();
        })
        .then(() => {
          console.log(
            "Promise Second then() Evalauated successfully"
          );
        });

      flushMicrotasks();
      console.log("Running Assertions");

      expect(test).toBeTruthy();
    }));

    /* 
    *We have tested code that uses promise and we have tested code that uses asynchronous operation such as 
    setTimeout, now let us test code that uses both of them.
    goal here is to know when to call multiple utilities that we have avalaible such as flushMicroTasks,
    tick, flush. we will learn when to call each and why.
    */
    it("Asynchrinous Test Example - Promises + setTimeout()", fakeAsync(() => {
      let counter = 0;
      Promise.resolve().then(() => {
        counter += 10;

        setTimeout(() => {
          counter += 1;
        }, 1000);
      });
      expect(counter).toBe(0);
      flushMicrotasks();
      expect(counter).toBe(10);
      flush();
      expect(counter).toBe(11);
    }));
                                            /* 
    *Here we will see how to use fakeAsync utility to test observable based code that internally
    uses asynchronous operation such as promises or setTimeout.so you know rxjs is the library, 
    so observables are built internally sometimes with promises,sometimes with using asynchrnous 
    operationn like setTimeout setInterval etc. and many times they are purely synchronous code. 
    for testing purely synchronous code, we dnt even need fakeAsync utility.
    
    lets first see exmple of tetsing synchornous observable
    */

    it("Asynchronous test exmaple- Observables", fakeAsync(() => {
      // let test = false;
      // console.log("Creating Observable");
      // const test$ = of(test);
      // test$.subscribe(() => {
      //     test = true;
      // });
      // console.log("Running assertions");
      // expect(test).toBeTruthy();

      /* 
        *Now lets make our Observable asynchronous using delay operator
        now delay internally uses setTimeout. now our synchronous test will
        fail. lets use fakeAsync to write test. now we can control passage of time.
        as delay is internally using setTimeout, now we can us tick here. now our test
        pases.
        As you can see that testing obervable based code is very similar to testiing any other code which
        uses promises,setTimeout etc. there are multiple types of observables, some observablea are
        synchonrous  and some are asynchronous. They are asynchronous becoz they uses internally in their
        implementation things such as promises and setTimeouts etc. so in order to test those type of 
        observables we will have to use the fakeAsync test utility, if we want to write ur assertions
        in synchronous looking way at the end of body as we are used to. we can also use done callback
        and write pur tests
        */
        let test = false;
        const test$ = of(test);
        test$.pipe(delay(1000)).subscribe(() => {
            test = true;
        });
        tick(1000);
        expect(test).toBeTruthy();
      }));
    });