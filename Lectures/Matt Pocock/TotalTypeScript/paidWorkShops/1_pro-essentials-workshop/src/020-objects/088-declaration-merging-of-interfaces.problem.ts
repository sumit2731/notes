interface Logger {
  log(message: string, level: number): void;
}

interface Logger {
  log(message: string): void;
}

const myLogger: Logger = {
  log: (message: string) => {
    console.log(message);
  },
};

/**
 * because of declaration merging both types are supported
 */
myLogger.log("My message");
myLogger.log(
  "My message",
  // @ts-expect-error Level is NOT needed
  123
);
