/**
 *  Enums are real objects that exist at runtime. For example, the following enum,
 * can actually be passed around to functions
 */

enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

/*
Enums at compile time

Even though Enums are real objects that exist at runtime, the keyof keyword works differently than you
might expect for typical objects. Instead, use keyof typeof to get a Type that represents all Enum 
keys as strings.
*/

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"

/* 
Extra Notes - From matt Spock ts Lecture
  why you should avoid enum


  a)Enum ends up as a object in js, which has some extra properties then expected.
    AboveLogLevel enums ends up like this in js. This happens only for nuber enums,
    string enums creates only expected properties
*/

const LOG_LEVEL = {
  ERROR: 0,
  0: "ERROR",
};

/**
 * 2)Enums cheats typescript's structural type system (means ts does not care about names of things
 *  it only cares about their value at run time)
 */

function log(message: string, level: LogLevel) {}

log("Hey", "DEBUG"); // here we have to pass a enum only

/* 
Solution 1 - 
  1)use const enums
  2)Drawback -
    some ts docs gives some edge cases. you should also never use them if you are inside library 
      code,because const enums are dangerous if you dnt control the compiler using them.
*/

/**
 * Solution 2 -
 *
 * 1)Use pojo
 */

const LOG_LEVEL2 = {
  DEBUG: "DEBUG",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

type ObjectValues<T> = T[keyof T];
type LOG_LEVEL2_VALUES = ObjectValues<typeof LOG_LEVEL2>;

function log2(message: string, level: LOG_LEVEL2_VALUES) {}

/* 
now we can call it using LOG_LEVEL2, as well as individual strings
*/
log2("HEY", "DEBUG");
log2("HEY", LOG_LEVEL2.DEBUG);

/**
 * Another advantage of above approach- we got a mapping between level and human readable version
 * that level. which means we can prepend the message with level it is at.
 * this has various applications.
 *
 * Same thing is not applicable with enums because in enums we do not have access to property of
 *  enums, if only have value. so we cannot refer to property name
 */

function log2(message: string, level: LOG_LEVEL2_VALUES) {
  console.log(`${LOG_LEVEL2[level]}: ${message}`);
}

log2("HEY", "DEBUG");

/**
 * In order to do same thing in enums below code is required
 */

enum LogLevel4 {
  DEBUG,
  WARNING,
  ERROR,
}

const titlesMap = {
  [LogLevel4.DEBUG]: "Debug",
  [LogLevel4.WARNING]: "Warning",
  [LogLevel4.ERROR]: "Error",
};

function log4(message: string, level: LogLevel4) {
  console.log(`${titlesMap[level]}: message`);
}

log4("Hello", LogLevel4.DEBUG);
