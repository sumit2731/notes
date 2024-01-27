/**
 * @ReservedKeywords
 * You cannot use reserved words in jsx
 *
 * for - htmlFor
 * class - className
 */

const element = (
  <div>
    <label htmlFor="name">Name:</label>
    <input id="name" className="fun-input" />
  </div>
);

/**
 *
 * To be a bit more specific: for and class work fine when we use them on native HTML elements, but we run into problems
 * if we try and use them on custom components.
 *
 * You can have reserve name as property of object. but you cannot declare variables with those names.
 * so using class and for is fine here, but it will cause issue in custom component, where while destructing
 * the propers you need to have variables with same name. so suing class and id will give error these
 */

/**
 * @SelfClosingTags - In HTML you can leave closing tags
 * but in jsx you need to provide closing tags for element
 *
 * in html img does not have closing tag, in jsx even for this you need to provide a closing tag
 */

/**
 * @CaseSensitive tags
 * html is case insenstive
 * JSX, by contrast, is case-sensitive. Our tags must all be lowercase:
 *
 * This restriction might seem arbitrary, but there's a very good reason for it: the JSX compiler uses the
 * tag's case to tell whether it's a "primitive" (part of the DOM) or a custom component.
 */

/**
 * @CaseSensitive attributes
 * Attributes needs to be in camelCase
 *  (2 Separate words needs to be in camel case,words with '-' needs to be in camel case)
 *
 * autoplay → autoPlay
 * onclick → onClick
 * tabindex → tabIndex
 * stroke-dasharray → strokeDasharray (this one is specific for SVGs)
 *
 *
 * @exceptions - Data and ARIA attributes keep their dashes
 *
 * for ex, this is valid jsx
 */

const element2 = (
  <button data-test-id="close-dialog-button" aria-label="Close dialog">
    <img alt="" src="/icons/x.svg" />
  </button>
);

/**
 * @InlineStyles
 * In html,style attribute is a string
 * In jsx it is object
 *
 * @All CSS properties are written in “camelCase”. Every dash is replaced by capitalizing the subsequent
 * word:
 *
 *  background-position    becomes  backgroundPosition
 *  border-bottom-color    becomes  borderBottomColor
 *  -webkit-font-smoothing becomes  WebkitFontSmoothing
 *@UnitLess - While it's a common convention in React to use unitless values where possible, you can 
    absolutely use full units if you prefer!
 * Also, React will automatically apply the px suffix for certain CSS properties. For example:
 */

<div
  style={{
    width: 200, // Equivalent to `width: 200px`
    paddingTop: 8, // Equivalent to `padding-top: 8px`
  }}
></div>;

/**
 *Watch out for properties that take a unitless value by default, like flex or lineHeight.
 For example, this code will produce lines that are twenty times taller than default, not
 lines that are 20px tall:
 */

<p
  style={{
    lineHeight: 20, // Equivalent to `line-height: 20`
  }}
></p>;

/**
 * Inline styles and css variables
 */
