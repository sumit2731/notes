import { CSSProperties } from "react";

/**
 * In this implementation, we need to specify the theme
 * inside useStyled wherever we use it. This is not ideal.
 *
 * See if you can refactor useStyled into a function called
 * makeUseStyled which returns a useStyled function, typed
 * with the theme.
 *
 * Desired API:
 *
 * const useStyled = makeUseStyled<MyTheme>();
 */
const useStyled = <TTheme = {}>(func: (theme: TTheme) => CSSProperties) => {
  // Imagine that this function hooks into a global theme
  // and returns the CSSProperties
  return {} as CSSProperties;
};

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}
/**
 * Problem is we have to metion MyTheme each time. can we get rid of this.
 *
 * new function signature is also given above
 */
const buttonStyle = useStyled<MyTheme>((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));

const divStyle = useStyled<MyTheme>((theme) => ({
  backgroundColor: theme.color.primary,
}));

const makeUseStyled =
  <TTheme>() =>
  (func: (theme: MyTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

const useStyled2 = makeUseStyled<MyTheme>();

const buttonStyle2 = useStyled2((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));
