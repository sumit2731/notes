/**
 * 2 types of 3rd party libraries -
    a)not written in typescript
    b)written in typescript
 */

/* 
a)
    1)downloaded lodash, when tried to use it, got error - "could not find declaration file for lodash"

    to get it working go to tsconfig.json and set value of - "noEmitOnError" to false.

    now it is working but ts no clue what this library is exporting.

    solutions - install types for third party library. install this package - @types/lodash

    now this is dev dependency only -

        npm install --save-dev @types/lodash

    to search for types packages -
     "libraryName" types

     ex - lodash types


     see - code/src/app.ts


    2) you can use declare keyword to tell typescript about certain types

*/

/**
 * Libraries written in ts
 *
 * a)class-transformer - converts json into class instances
 * b)class validator - uses deciraotas and validates objects for you
 */
