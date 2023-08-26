/** 
    Write a MyPromise class based on the native Promise
    built-in class.

    An instance of the MyPromise class will always have one of
    three states: 'pending', 'fulfilled', or
    'rejected'. This state should be accessible through the
    state getter method.
  
    When a MyPromise is in the fulfilled or rejected state, it will
    have a value which should be accessible through the
    value getter method. A pending promise should always have the
    value of null.
  

  
    The MyPromise constructor takes in an executor function, which
    takes two callbacks: resolve and reject. This
    executor function should run immediately. Both of the callbacks passed to
    the executor function take in a value, which when called will set the value
    of the MyPromise as well as update the state based on which
    callback was called (resolve sets it to fulfilled, while
    reject sets it to rejected). If the executor function throws an
    error, the MyPromise should be rejected with the error value.
    For simplicity, you can assume only one of these callbacks will ever be
    called, and it will never be called more than once.
  

  
    An instance of the MyPromise class should have two public
    methods: then and catch with the following
    functionality:
  

      then(onFulfilled, onRejected): Runs one of the callbacks
      after the MyPromise has settled. If the
      MyPromise is fulfilled, the value should be passed to the
      onFulfilled callback. If the MyPromise is
      rejected, the value should be passed to the
      onRejected callback. The then method should
      return a new MyPromise that resolves to the value as returned
      by either onFulfilled or onRejected. If either
      onFulfilled or onRejected throws an error, the
      returned MyPromise should be rejected with that error value.
    
      catch(onRejected): Runs the onRejected callback
      after the MyPromise has been rejected. The value should be
      passed to the onRejected callback. The
      catch method should return a new MyPromise that
      resolves to the value returned by onRejected. If
      onRejected throws an error, the returned
      MyPromise should be rejected with that error value.
    

  
    Both then and catch return new
    MyPromise
    objects, meaning these methods should be chainable with the next call in the
    chain not running until the previous call completes. None of these callbacks
    should run until all other code in the call stack completes (i.e. they
    should be treated as microtasks by the event loop).
  

  
    If multiple calls to then and/or catch are made on
    the same MyPromise, their callback functions should be invoked
    in the order that then and catch were called (see
    sample usage #2).
  

  
    All of the callback functions to then and
    catch are optional. If the required callback is not passed, a
    new MyPromise
    should be returned with the previous value and state.
  

  
    Your code should not use the native Promise object in any way.
 */

/**
 * Description in short -
 * 
 * 1)Promise properties -state and value
 * 2)executor function - 
 *  a)If error is thrown then promise is rejected
 *  b)effect of resolve and reject - sets state and value of promise
 * 3)then -
 *    takes callbacks, executed when promise is resolved and rejected
 *    return promise
 *        resolved with value returned by callbacks
 *        if error is thrown by callbacks then promise is rejected
 *        If callbacks are not provided then returned promise is resolved with same value as orignal promise
 *          however if promise is rejected, and second callback is not provided then returned promise is also rejected with 
 *          orignal promise error.
 * 4)catch -
 *    takes callback executed after promise is resolved
 *    returns promise 
 *      resolves with value retruned by callback
 *      in case of error is thrown by callbacks promise is rejected
 * 
 * 5)callbacks to then and catch should run when there are no statements in main callstack
 *    
 */

/**
 * Differences from normal promises -
 * 
 *  a)we have getter and setter functions for state and value
 *  b) we are assuming that resolve and reject are only called once
 */

const STATE = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
  };
  
  class MyPromise {
    #state = STATE.PENDING;
    #value = null;
    #fulfiledCallbacks = [];
    #rejectedCallbacks = [];
  
    constructor(executorFunc) {
      try {
        executorFunc(
          (value) => this.#resolve(value),
          (value) => this.#reject(value)
        );
      } catch (e) {
        this.#reject(e);
      }
    }
  
    then(onFulfilled, onRejected) {
      /**
       * .then always returns a promise, which is resolved with value returned by onFullied and onRejected
       * if these callbacks are not provided then return promise is resolved or rejected with same value
       * as source promise
       *
       * also if in callback to then , a error is thrown then resultant promise is rejected
       * callbacks to .then should not be executed immediately but should be added to microtask queue
       */
      return new MyPromise((resolve, reject) => {
        const fulfilledCallback = () => {
          if (!onFulfilled) return resolve(this.#value);
          queueMicrotask(() => {
            try {
              const value = onFulfilled(this.#value);
              resolve(value);
            } catch (error) {
              reject(error);
            }
          });
        };
        const rejectedCallback = () => {
          if (!onRejected) return reject(this.#value);
          queueMicrotask(() => {
            try {
              const value = onRejected(this.#value);
              resolve(value);
            } catch (e) {
              reject(e);
            }
          });
        };
        switch (this.#state) {
          case STATE.PENDING:
            this.#fulfiledCallbacks.push(fulfilledCallback);
            this.#rejectedCallbacks.push(rejectedCallback);
            break;
          case STATE.FULFILLED:
            fulfilledCallback();
            break;
          case STATE.REJECTED:
            rejectedCallback();
            break;
          default:
            throw new Error("UnExpected promise state");
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    get state() {
      return this.#state;
    }
  
    get value() {
      return this.#value;
    }
  
    #resolve(value) {
      this.#state = STATE.FULFILLED;
      this.#value = value;
      this.#fulfiledCallbacks.forEach((callback) => callback(this.#value));
      this.#fulfiledCallbacks = []; // not done in coutrse solution
    }
  
    #reject(error) {
      this.#state = STATE.REJECTED;
      this.#value = error;
      this.#rejectedCallbacks.forEach((callback) => callback(this.#value));
      this.#rejectedCallbacks = []; // not done in course
    }
  }
  
  // new MyPromise((resolve,reject) => {
  //     resolve(10);
  // }).then(val => {
  //     console.log(val * 2)
  // });
  
  // new MyPromise((resolve,reject) => {
  //     resolve(10);
  // }).then(val => {
  //     console.log(val * 2)
  //     return val*2;
  // }).then(val2 => {
  //     console.log(val2 *3)
  // });
  
  // new MyPromise((resolve,reject) => {
  //     setTimeout(()=> resolve(10) ,2000);
  // }).then(val => {
  //     console.log(val * 2)
  //     return val*2;
  // }).then(val => {
  //     console.log(val *3)
  // });
  
  // const promise = new MyPromise((resolve,reject) => {
  //     setTimeout(()=> resolve(10) ,2000);
  // })
  
  // promise.then(val => {
  //     console.log(val * 2)
  // })
  
  // promise.then(val => {
  //     console.log(val *3)
  // });
  
  let resolvedVal;
  let rejectedVal;
  
  const promise = new Promise((resolved,rejected) => {
      rejected(10);
  })
  .then(val => {
      resolvedVal = val
  })
  .catch(val => {
      rejectedVal = val
      console.log(rejectedVal);
  });