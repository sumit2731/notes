/**
 * we defined types which can be imported in other files.this can be useful if you want to
 * store your TypeScript types somewhere. But I'd actually recommend not doing that. And
 *  we'll get to that in a minute, I think.
 */

export type AvailableViaImport = string;

type NotAvailableViaImport = number;
/**
 * if we do not use this then types which are not exported can also be avalaible as
 * import in other files
 */
export {};
