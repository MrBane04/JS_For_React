// Day 6 — Mini Pipeline

// Create a pipe(f, g, h) function that:

// Takes three functions as parameters
// Returns a new function that accepts data
// Applies the functions in sequence: f → g → h
// Then use it to:

// Filter numbers greater than 0
// Double each number (multiply by 2)
// Sort the result in ascending order
function f(array) {
  return array.filter((number) => number > 0);
}
function g(array) {
  return array.map((number) => 2 * number);
}
function h(array) {
  return array.sort((a, b) => a - b);
}
function pipe(f, g, h) {
  return function (data) {
    return h(g(f(data)));
  };
}

const run = pipe(f, g, h);

console.log(run([1, 2, 3, -4, -5, 12]));
