/**
 * State setters aren't immediate.
 *
 * When we call setCount, we tell React that we'd like to request a change to a state variable. React
 * doesn't immediately drop everything; it waits until the current operation is completed (processing
 * the click), and then it updates the value and triggers a re-render.
 * For now, the important thing to know is that updating a state variable is asynchronous. It affects
 * what the state will be for the next render.It's a scheduled update.
 */

/**
 * Reason for this asynchronous behaviour - batching multiple State Updates togather. This is good for -
 *  a)Performance reasons, component is render only once
 *  b)User does not see wrong UI(Inconsistent UI)
 */
