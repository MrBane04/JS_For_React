// Create functions to:

// Return the squares of all numbers in an array.
// Return only even numbers.
// Return the sum of all numbers.
// Find the largest number.
// Check whether all numbers are positive.
// Check whether any number is greater than 100.
// Use only:

// map
// filter
// reduce
// some
// every

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101];
const numbers_negative = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
// Return the squares of all numbers in an array.

function squareArray(array) {
  return array.map((number) => number * number);
}

console.log(squareArray(numbers));

// Return only even numbers.

function onlyEvenNumbers(array) {
  return array.filter((number) => number % 2 === 0);
}

console.log(onlyEvenNumbers(numbers));

// Return the sum of all numbers.

function sumArray(array) {
  return array.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(sumArray(numbers));

// Find the largest number.

function largestNumber(array) {
  return array.reduce((comparator, number) => {
    return number > comparator ? number : comparator;
  }, 0);
}

console.log(largestNumber(numbers));

// Check whether all numbers are positive.

function onlyPositive(array) {
  return array.every((number) => number > 0);
}

console.log(onlyPositive(numbers_negative));

// Check whether any number is greater than 100.

function anyGreaterThanHundred(array) {
  return array.some((number) => number > 100);
}

console.log(anyGreaterThanHundred(numbers));
