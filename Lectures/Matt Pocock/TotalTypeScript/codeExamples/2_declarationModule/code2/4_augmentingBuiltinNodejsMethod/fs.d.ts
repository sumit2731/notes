// fs.d.ts - this is not considered in ts, so we declared in types folder
import * as fs from "fs";

declare module "fs" {
  export function customMethod(path: string): boolean;
}
