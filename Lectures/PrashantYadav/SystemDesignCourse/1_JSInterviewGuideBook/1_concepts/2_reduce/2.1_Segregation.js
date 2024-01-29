/**
 * Segregation using reduce
 */

const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];
const segregate = arr.reduce((previousValue, currentValue) => {
  // round of the value
  const floored = Math.floor(currentValue);
  // if the key is not present
  // create a new entry with the array value
  if (!previousValue[floored]) {
    previousValue[floored] = [];
  }
  // return the updated value
  return previousValue;
}, {});
console.log(segregate);
