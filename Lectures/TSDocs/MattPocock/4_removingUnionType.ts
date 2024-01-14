export type Letters = "a" | "b" | "c";

/**
 * Adding never ti a Union removes it from unon
 */
type RemoveC<TType> = TType extends "c" ? never : TType;

type WowWithoutC = RemoveC<Letters>;
