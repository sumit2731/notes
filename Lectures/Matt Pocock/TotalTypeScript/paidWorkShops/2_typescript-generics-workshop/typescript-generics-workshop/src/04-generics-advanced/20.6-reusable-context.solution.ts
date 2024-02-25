import { CSSProperties } from "react";

/**
 *
 * we moved the definition of use styled inside new function and moved the generic to outer
 * function level.
 * You can imagine now that useStyled and MyTheme can sit in one module together, and they can
 * export useStyled, and then buttonStyle and divStyle can just consume from useStyled here without
 * needing to pass in a type argument.
 *
 *
 * This solution is really, really useful, and I wish more libraries did it. It lets you pass
 * in type arguments at the top level, that are then inferred everywhere, almost like a global,
 * except it's not global because it's just scoped to this one function here. Extremely useful
 * pattern, and what it does is it lets you have a reusable type argument at the top level
 * which just filters all the way down.
 *
 *
 * Unfortunately, the only way to do this is by wrapping it in a factory function, because we
 * know that in TypeScript, generics are tied to function calls. Making another function call
 * at the top level which doesn't do anything, it's just literally an identity function where
 * you pass in a type argument, just by doing that little step there, you get really beautiful
 * inference in the rest of your app.
 */

/**
 * @MyNotes - Here types behaves as normal values. Using closures inner function can access values
 * from outer scope. same is happening for types here
 */
const makeUseStyled = <TTheme = {}>() => {
  const useStyled = (func: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

  return useStyled;
};

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}

export const useStyled = makeUseStyled<MyTheme>();

const buttonStyle = useStyled((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));

const divStyle = useStyled((theme) => ({
  backgroundColor: theme.color.primary,
}));
