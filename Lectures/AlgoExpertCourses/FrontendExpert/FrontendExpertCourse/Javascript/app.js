/**
 * Requirement -
 *  When immediate is false -
 *    When debounced function is called, and there is no further call to debounced function for timeout time, then, original function is called  after timeout
 *    If debounced function is called again before timeout , then timer is restarted and argumnets to last debounced call will be passed to orignal callback
 *  When immediate is true -
 *    First call should happen immediately
 *    If debounced function is called again before timeout has passed, call should be ignored, timer is restarted and there is no scheduling of call
 *    If function is called again after timeout has passed, callback should be executed immediately. also timer is started
 */
function debounce(fn, timeout, immediate = false) {
  let setTimeOutId = null;
  return function (...args) {
    clearTimeout(setTimeOutId);
    const shouldCallImmediately = immediate && setTimeOutId == null;
    if (shouldCallImmediately) {
      fn.call(this, ...args);
    }
    setTimeOutId = setTimeout(() => {
      if (!immediate) fn.call(this, ...args);
      setTimeOutId = null;
    }, timeout);
  };
}

module.exports = {
  debounce,
};
