//1)use of () -

/**
 * 
    a)Parentheses can be added to help us with formatting. By adding parens, we're able to push the 
        returned expression to a new line.

         it's common to wrap the short-form expression in parentheses when it's too long to fit on a
          single line:
 */

// prettier-ignore
const shoutWithParens = sentence => (
    sentence.toUpperCase()
  );

/**
 * Read This section - Implicitly returning objects
 * 
 * Returning Objects from Javascript
 * 
 * The problem is that curly braces ({}) serve two purposes in JavaScript: they're used for object 
 * notation, but they're also used to create blocks, like in if statements.
  
  When curly braces follow an arrow (=>), the JS engine assumes we're creating a new block, and so 
  we'll get a syntax error
 *
  If we want to implicitly return an object, we need to wrap it in parentheses.

  In JavaScript, parentheses can be added around any expression, to change its evaluation order.
 */
