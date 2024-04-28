import { expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

/**
 * wrong test, this always passes. because jest will not wait for our callback(which contains assertion) to be executed. it immediately runs the test
 *  as there is not expect statement, so test is passed.
 */
// it('should generate a token value', () => {
//     const testUserEmail = 'test@test.com';

//     generateToken(testUserEmail, (err, token) => {
//       expect(token).toBeDefined();
//     });
//   });

/**
 * Using Done to tell jest to wait for callback to be called.Here our test case passes but if we try put a wrong assertion
 * test case fails with timeout error.Reason -
 *
 * When done is not there, test fails when a error is thrown(when a assertion fails it throws error)
 *
 * But when done is added test will not fail or pass until done is called. even if assertion fails, tests will not fail if
 * done is not called. it will wait untill timeout to see if done is called if not, then it fails the test with timeout error.
 * but we want test to fail with exact error that occured, for that we need to call done with error that occured. as we know
 * when assertion fails it throws a error, we catch that error and pass it to done, to see that error.
 *
 *
 * course explanation -
 *  All failing expects throws a error which is then picked by jest or vitest and it fails the test.but in case we are using
 *      done, error is not picked up by jest or vitest
 *
 * so in this case and only in this case we need to use our own try-catch block. we write our assertion and IN case of error
 * we need to pass that error to done. In success case of success we do not pass any argument to done
 */

// it('should generate a token value', (done) => {
//   const testUserEmail = 'test@test.com';
//   generateToken(testUserEmail, (err, token) => {
//       expect(token).toBe(2);
//       done();
//   });
// });

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    try {
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      // in sucess case you dnt pass any arguments to then
      done();
    } catch (e) {
      //here test fails with error passed to done
      done(err);
    }
  });
});

/**
 * Testing promise based code.
 *
 * a)return promise from your test, jest will wait for that promise to resolve. if promise is failed, then test fails.
 *  See example in jest docs - https://jestjs.io/docs/asynchronous
 *
 * b)alternatively use async/await in your tests. this is same as first one because async function returns a promise, which
 * resolve when whole functions is executed. see docs how we can test failure
 *
 * c)use .resolve/.reject - Be sure to return the assertion—if you omit this return statement, your test will complete before
 *  the promise returned from fetchData is resolved and then() has a chance to execute the callback.
 */
it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();

  expect(token).resolves();
});

/**
 * see docs,how to details about testing asynchronous things, like testing failure usecases
 *
 * https://jestjs.io/docs/asynchronous
 * https://jestjs.io/docs/tutorial-async#resolves
 */
