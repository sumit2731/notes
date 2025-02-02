// Try uncommenting this!
import "@total-typescript/ts-reset";

/**
 * Alternate way of declaring array as readonly
 */
const users = ["matt", "sofia", "waqas"] as const;

users.includes("matt");

users.indexOf("bryan");
