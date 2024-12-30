// import { User } from "./example.js";

/**
 * Option 1
 *  at run time - import {} from "./example.js";
 */
// import { type User } from "./example.js";

/**
 * Option 2
 *  at run time - whole import gets removed
 */
import type { User } from "./example.js";

type Example = User;
