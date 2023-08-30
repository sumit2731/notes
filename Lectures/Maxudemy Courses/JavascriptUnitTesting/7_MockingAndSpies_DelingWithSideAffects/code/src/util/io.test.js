import {it,expect,vi, vitest} from 'vitest';
import {promises as fs} from 'fs';

import writeData from './io';




/**
 * Here we know that write Data returns the fs.writeFile, so we are testing that if that promise resolves then writeFile was called.
 * also we know that writeFile resolves to undefined value, hence the test case
 * 
 * Also if forsome reasons it is not able to read file, then promise rejects and our test cases fails.
 * 
 * here we do not want to test writeFile function, it is responsibility of nodejs to make sure it works. what we want to test
 *  how our code works with that function,we want to test that our code does its job. so we want to test -
 * 
 * a)whther writeFile was called successfully
 * b)whther it was called with writeData
 * 
 * We are not interested in learning whether a file is actually written to file system. because our code is not doing this,
 * a third party code is doing this 
 */

// it('should execute writeFile method',() => {
//     const testData = 'Test';
//     const testFileName = 'test.txt';
//     expect(writeData(testData,testFileName)).resolves.toBeUndefined();
// });


/**
 * name or path of module that should be mocked. we can mock both third part modules as well as user define modules
 * we do not do pass any extra configuration, then this will trigger vites/jests auto mocking algo, it will basically 
 * find this module and replace all functions in there with empty spy functions
 * 
 * In vitest mocks are hoisted to top, but i think in jest these are not. so in case of jest , you need to move mocks to
 *  the top, even before imports, because we want to make sure that it is mocked before we import.
 * 
 * Also this mock is applicable in this file only. in other
 */

vi.mock('fs');


it('should execute writeFile method',() => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    writeData(testData,testFileName);
    /**
     * This will now fail funciton of fs module are replaced by spies. they do not return promise
     */
    //expect(writeData(testData,testFileName)).resolves.toBeUndefined();
    //here we are testing that write method was called
    expect(fs.writeFile).toHaveBeenCalledOnce();
});

/**
 * now we want to test that writeFile was called with some arguments. now path of file is dependent on some other module i.e path
 * we mock that module also but instead of using auto mocking, we want join method to return path that is path to it.
 * to provide auto implementation of module, we pass function as second param, and this returns a object.
 * this returned object is used a replacement of mocked module
 * 
 * see notes of lecture 67
 */

vitest.mock('path',() => {
    return {
        default: {
            join: (...args) => args[args.length-1] 
        }
    }
});
it('should execute writeFile method with given arguments',() => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    writeData(testData,testFileName);
    /**
     * This will now fail funciton of fs module are replaced by spies. they do not return promise
     */
    //expect(writeData(testData,testFileName)).resolves.toBeUndefined();
    //here we are testing that write method was called
    //expect(fs.writeFile).toHaveBeenCalledOnce();
    expect(fs.writeFile).toBeCalledWith(testFileName,testData);
});

/**
 * We have defined fs.js file in __mocks__ folder, so automocking algo will use that implementation
 */
it('writeFile method shouldd return promise',() => {
    const testData = 'Test';
    const testFileName = 'test.txt';
    
    expect(writeData(testData,testFileName)).resolves.toBeUndefined();
});


