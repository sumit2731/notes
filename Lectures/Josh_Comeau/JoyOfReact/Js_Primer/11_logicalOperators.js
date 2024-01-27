/**
 * Logical Operators -  they also act as control flow operators.
 */

/**
 * The && operator isn't designed to produce a boolean value. It's designed to resolve to one of
 * the expressions on either side of the operator.
 *
 * You can think of && like a gate. We're allowed to move through the gate if the left-hand side
 * is truthy.
 */

if (isLoggedIn && userRole === "administrator") {
  // This code only runs if BOTH conditions above are truthy
}
//
const myAge = 35;
const result = myAge < 50 && myAge;

//This becomes clearer when we chain multiple &&s together:

/**
 * The first expression in this chain is numOfChildren, which is 4. This is a truthy value, and so the
 * first && gate is unlocked.
 *
 * The second expression is parkingHasBeenValidated, which is true. We move through the second gate.
 *
 * The third expression, signatureOnWaiver, is an empty string (''), which is falsy. This means that
 * the third && gate stays locked. We can't go any further. The current expression, '', is what gets
 * resolved.
 *
 * As a result, admissionTicket would be assigned ''. Not false.
 * 
 * admissionTicket will be assigned to the first falsy expression. If we make it through all of the 
 * gates, admissionTicket will be assigned to the final expression, whether it's truthy or falsy.
 * 
 * 
 * There's one more interesting takeaway here: The generateTicket function is only called if we make it
 * through all the gates. In the first example, when signatureOnWaiver was falsy, the generateTicket
 * function was never called.

    This is because of short-circuiting. If one of the expressions before an && operator evaluates to a
    falsy value, the rest of the expressions are skipped. They won't be executed at all.
 */

const numOfChildren = 4;
const parkingHasBeenValidated = true;
const signatureOnWaiver = "";

const admissionTicket =
  numOfChildren &&
  parkingHasBeenValidated &&
  signatureOnWaiver &&
  generateTicket();

/**
 * same code using if else
 */

let admissionTicket2;

if (!numOfChildren) {
  admissionTicket2 = numOfChildren;
} else if (!parkingHasBeenValidated) {
  admissionTicket2 = parkingHasBeenValidated;
} else if (!signatureOnWaiver) {
  admissionTicket2 = signatureOnWaiver;
} else {
  admissionTicket2 = generateTicket();
}

/**
 * @LogicalOR - It doesn't stop and provide the first falsy value. It stops and provides the first
 * truthy value.The gate is unlocked if value om left side is falsy ,if it is truthy then we move
 * to right hand side
 */
