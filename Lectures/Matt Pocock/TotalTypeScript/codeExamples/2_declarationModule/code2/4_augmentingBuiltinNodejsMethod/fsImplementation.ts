// fsImplementation.ts
import * as fs from "fs";

// Implementing the custom method added via augmentation
fs.customMethod = (path: string) => {
  return fs.existsSync(path); // Just as an example
};

// Usage
if (fs.customMethod("path/to/file")) {
  console.log("File exists!");
}
