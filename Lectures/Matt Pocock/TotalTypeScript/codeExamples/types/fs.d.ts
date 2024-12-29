// fs.d.ts
import * as fs from "fs";

declare module "fs" {
  export function customMethod(path: string): boolean;
}
