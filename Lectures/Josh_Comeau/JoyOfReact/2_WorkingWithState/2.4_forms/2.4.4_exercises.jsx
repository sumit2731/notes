/**
 * DropDown _ useage of optgroup tag, in options
 *
 * also see fieldset tag
 *
 */

<select
  required
  id="country"
  name="country"
  value={country}
  onChange={(event) => {
    setCountry(event.target.value);
  }}
>
  <option value="">— Select Country —</option>
  <optgroup label="Countries">
    {countryNames.map(([id, label]) => {
      return (
        <option value={id} key={id}>
          {label}
        </option>
      );
    })}
  </optgroup>
</select>;

/**
 * Generative art exercise -
 *  radio buttons - Don't neglect the “value” prop! While it can be skipped by specifying a string
 *    in the onChange handler, this is not recommended, as it deviates from DOM specifications, and
 *    affects the ability for this form to work without React(In Server side rendering)
 */
