// Day 4 — Functions and Closures

// 1) createAdder(x)
// Return a function that adds x to its argument.
function createAdder(x) {
  return function add(y) {
    return x + y;
  };
}
const add12 = createAdder(12);
console.log(add12(3));
// 2) createCounter()
// Keep a private counter and return function(s) to use it.
function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      return ++counter;
    },
    get: function () {
      return counter;
    },
  };
}
const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.get());
counter1.increment();
// 3) once(fn)
// Return a wrapper that allows fn to run only one time.
function once(fn) {
  let wasExecuted = false;
  return function () {
    if (wasExecuted) {
      return undefined;
    } else {
      wasExecuted = true;
      fn();
    }
  };
}
let n = 0;
const f = once(() => ++n);
f();
f();
console.log(n);
// 4) memoize(fn)
// Cache results by arguments and reuse cached values.
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

const add = (a, b) => {
  return a + b;
};
const memoAdd = memoize(add);
console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3));
console.log(memoAdd(4, 5));
