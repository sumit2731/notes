//1)use of () -

/**
 * 
    a)Parentheses can be added to help us with formatting. By adding parens, we're able to push the 
        returned expression to a new line.

         it's common to wrap the short-form expression in parentheses when it's too long to fit on a single line:
 */

// prettier-ignore
const shoutWithParens = sentence => (
    sentence.toUpperCase()
  );

/**
 * b)If we want to implicitly return an object, we need to wrap it in parentheses:
 */

/**
 * c)In JavaScript, parentheses can be added around any expression, to change its evaluation order.
 */
