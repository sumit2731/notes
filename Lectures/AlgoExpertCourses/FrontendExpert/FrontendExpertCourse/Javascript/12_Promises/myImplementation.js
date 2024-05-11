const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = STATE.PENDING;
  #value = null;
  #fulfilledCallbacks = [];
  #rejectedCallbacks = [];

  constructor(executor) {
    try {
      executor(
        (val) => this.#resolve(val),
        (val) => this.#reject(val)
      );
      // executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (e) {
      this.#reject(e);
    }
  }
  get value() {
    return this.#value;
  }
  get state() {
    return this.#state;
  }
  #resolve(val) {
    if (this.#state == STATE.PENDING) {
      this.#state = STATE.FULFILLED;
      this.#value = val;
      for (let fn of this.#fulfilledCallbacks) {
        if (typeof fn == "function") fn();
      }
      this.#fulfilledCallbacks = [];
    }
  }
  #reject(val) {
    if (this.#state == STATE.PENDING) {
      this.#state = STATE.REJECTED;
      this.#value = val;
      for (let fn of this.#rejectedCallbacks) {
        if (typeof fn == "function") fn(this.#value); // they all should be called with value
      }
      this.#rejectedCallbacks = [];
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((res, rej) => {
      const fulfilledCallback = () => {
        queueMicrotask(() => {
          try {
            const returnValue = onFulfilled
              ? onFulfilled(this.#value)
              : this.#value;
            res(returnValue);
          } catch (e) {
            rej(e);
          }
        });
      };
      const rejectedCallback = () => {
        queueMicrotask(() => {
          try {
            const returnValue = onRejected
              ? onRejected(this.#value)
              : this.#value;
            if (onRejected) res(returnValue);
            else rej(returnValue);
          } catch (e) {
            rej(e);
          }
        });
      };
      switch (this.#state) {
        case STATE.PENDING:
          this.#fulfilledCallbacks.push(fulfilledCallback);
          this.#rejectedCallbacks.push(rejectedCallback);
          break;
        case STATE.FULFILLED:
          fulfilledCallback();
        case STATE.REJECTED:
          rejectedCallback();
      }
    });
  }
  catch(onRejectedCallback) {
    return this.then(null, onRejectedCallback);
  }
}
