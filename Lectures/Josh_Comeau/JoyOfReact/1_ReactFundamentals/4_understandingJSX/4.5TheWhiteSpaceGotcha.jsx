const element = (
  <div>
    <strong>Days until Santa returns:</strong>
    {daysUntilSantaReturns}
  </div>
);
/**
 * It complies to , so there is no white space
 */

const element2 = React.createElement(
  "div",
  {},
  React.createElement("strong", {}, "Days until Santa returns:"),
  daysUntilSantaReturns
);

/**
 * To add whitespace use this
 */

const element3 =
  // prettier-ignore
  <div>
    <strong>Days until Santa returns:</strong>
    {' '}
    {daysUntilSantaReturns}
</div>;

/**
 * This complies to
 */

const element4 = React.createElement(
  "div",
  {},
  React.createElement("strong", {}, "Days until Santa returns:"),
  " ",
  daysUntilSantaReturns
);
