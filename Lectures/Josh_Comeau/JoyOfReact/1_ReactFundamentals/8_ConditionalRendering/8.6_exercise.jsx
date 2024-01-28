/**
 * @Exercise -Here we need to display a visually hidden element.
 *
 * we cannot use display:none because this also hides the element from screen readers. this css snippet is best
 *  to be used
 */

const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

/**
 * visibally hidden vs arai-label
 * 
 * In this particular case, however, we can't use aria-label. This is because aria-label only works on interactive elements like buttons.

As a general rule, I prefer to use this VisuallyHidden component over aria-label, because it requires
less expertise to use correctly. It also gives us more control over the screen reader experience,
since we can place the VisuallyHidden element wherever it makes the most sense.
 */
