/**
 * You cannot use relative path here, error - "cannot use relative path"
 *
 *when use relative path in normal ts file , error - "cannot find file 'path'"
 */
declare module "*.png" {
  const png: string;

  export default png;
}
