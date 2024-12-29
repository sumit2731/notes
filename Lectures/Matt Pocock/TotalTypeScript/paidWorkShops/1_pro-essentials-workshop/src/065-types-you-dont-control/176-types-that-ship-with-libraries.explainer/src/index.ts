import { z } from "zod";
/**
 * see lecture
 *
 * inside library you can see for each js file we have d.ts file
 * If you have some declaration files next to some JavaScript files, wherever they are, whether they're in
 * your Node modules, whether they're in your code, TypeScript will understand that that .d.ts file
 * basically corresponds to accompanying JavaScript file.This is a crucial consideration when deploying a
 * library, which we'll look at later.
 */
const user = z.object({
  name: z.string(),
});
