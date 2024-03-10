/**
 * TextArea - value is expressed children rather than using a value prop
 */

/**
 * select- option value that is selected has a selected attribute
 */
<select>
  <option value="a">Option 1</option>
  <option value="b" selected>
    Option 2
  </option>
  <option value="c">Option 3</option>
</select>;

/**
 * radio buttons -
 *
 *  attributes used -
 *    a)name
 *    b)value
 *    c)checked
 *    id
 */

/**
 * In react all form controls follow the same pattern
 *
 *  a)The current value is locked using either value (for most inputs) or checked (for checkboxes and
 *      radio buttons).
 *  b)We respond to changes with the onChange event listener.
 */
