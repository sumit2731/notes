/**
 * https://www.youtube.com/watch?v=q1im-hMlKhM
 *
 *
 * steps to access process.env -
 *  a)in tsconfig.json, add types: ["node"]
 * b)install this - npm i --save-dev @types/node
 */
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
    }
  }
}

process.env.DATABASE_URL;

/**
 * In video he talks about other way to do this with zod, but since we are not using ZOD so I skipped it
 */
