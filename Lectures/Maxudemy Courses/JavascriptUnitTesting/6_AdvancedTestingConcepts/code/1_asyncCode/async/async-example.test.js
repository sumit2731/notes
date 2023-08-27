import { expect, it } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

/**
 * wrong test, this always passes. because jest will not wait for function to be executed. it immediately runs the test
 *  as there is not expect statement, so test is passed.
 */
// it('should generate a token value', (done) => {
//     const testUserEmail = 'test@test.com';
  
//     generateToken(testUserEmail, (err, token) => {
//       expect(token).toBeDefined();
//     });
//   });

/**
 * Using Done to tell jest to wait for callback to be called.Here our test case passes but if we try put a wrong asesrtion
 * test case fails with timeout error.Reason -
 * 
 * If done() is never called, the test will fail (with timeout error), which is what you want to happen.
 * If the expect statement fails, it throws an error and done() is not called.
 * 
 * If we want to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch 
 * block to done. Otherwise, we end up with an opaque timeout error that doesn't show what value was received by expect(data).
 * 
 * course explanation - 
 *  All failing expects throws a error which is then picked by jest or vitest and it fails the test.but in case we are using
 *      done, error is not picked up by jest or vitest
 * 
 * so in this case and only in this case we need to use our own try-catch block. we write our assertionand IN case of error we need to pass that 
 * error to done In success case of success we do not pass any argument to done
 */

// it('should generate a token value', (done) => {
//   const testUserEmail = 'test@test.com';

//   generateToken(testUserEmail, (err, token) => {
//       expect(token).toBe(2);
//       done();
//   });
// });

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
        expect(token).toBe(2);
        done();
    }
    catch(e) {
        done(err);
    }
  });
});

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';

  const token = await generateTokenPromise(testUserEmail);

  expect(token).toBeDefined();
});
