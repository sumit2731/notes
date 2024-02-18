/**
 * Only handles object types
 */

type DeepPartial <T> = {
    [K in keyof T]? : T extends object ? DeepPartial<T[K]> : T[K]
}

type t1 = {
    // a: string;
    // b: {
    //     c : string
    // };
    // d: {
    //     e: {
    //         f: string;
    //     }
    // },
    g: string[]
}

/**
 * Here problem is arrays can take values of undefined also
 */

type t2 = DeepPartial<t1>
/* 
    type t2 {
        g?: (string | undefined)[] | undefined;
    } 
*/
/**
 * here problem is undfeined is also allowed in array
 */
let obj: t2 = {
    g: [undefined]
}

type t9 = DeepPartial<Array<string>>

/**
 * This handles Array type, Object Type
 */
type DeepPartial2<T> = 
    T extends Array<infer U> 
    ? Array <DeepPartial2<U>>
    : T extends object
        ? {[K in keyof T]? : T[K] extends object ? DeepPartial2<T[K]> : T[K]}
        : T;

type t3 = {
    g?: Array<>
}



