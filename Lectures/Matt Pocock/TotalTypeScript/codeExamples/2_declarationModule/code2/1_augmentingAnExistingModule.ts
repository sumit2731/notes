/**
 * You can extend the types of an existing module by reopening it with declare module.
 * this code needs to go into
 */

// Original typings from "express" module
import * as express from "express";

// Extending the Request interface to include a custom property
declare module "express" {
  export interface Request {
    user?: { id: number; name: string }; // Add a `user` property
  }
}

// Now you can use `req.user` in your Express app
const app = express();
app.use((req, res, next) => {
  req.user = { id: 1, name: "John Doe" }; // No type error
  next();
});
