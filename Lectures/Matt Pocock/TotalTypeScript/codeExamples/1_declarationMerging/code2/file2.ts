import { User } from "./file1";
/**
 * whichever files uses this relative import path, this declaration will be used
 */
declare module "./file1" {
  export interface User {
    email: string;
    age?: number; // Optional property
  }
}
