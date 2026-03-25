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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

//====================================================//
// Create functions to:
// Sum all even numbers, then square the result.
// Count how many users are adults (age >= 18).
// Sum all employee salaries.
// Check if ALL products are in stock AND priced under $100.
// Check if ANY post has a "javascript" tag.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 16 },
];

const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Jack", salary: 55000 },
];

const products = [
  { name: "Laptop", inStock: true, price: 999 },
  { name: "Mouse", inStock: true, price: 25 },
  { name: "Keyboard", inStock: false, price: 75 },
];

const posts = [
  { title: "Post 1", tags: ["javascript", "react", "web"] },
  { title: "Post 2", tags: ["nodejs", "backend"] },
  { title: "Post 3", tags: ["css", "html", "web"] },
];

// Sum all even numbers, then square the result.

function sumOfSquaredEvens(array) {
  const result = array
    .filter((number) => number % 2 === 0)
    .reduce((sum, number) => {
      return sum + number;
    }, 0);
  return result * result;
}
console.log("Zad1");
console.log(sumOfSquaredEvens(numbers));

// Count how many users are adults (age >= 18).

function countAdults(usersArray) {
  const result = usersArray.filter((user) => user.age >= 18);
  const numberOfAdults = result.length;
  return numberOfAdults;
}

console.log(countAdults(users));

// Sum all employee salaries.

function totalSalary(empArray) {
  const onlySalary = empArray.map((user) => user.salary);
  const result = onlySalary.reduce((sum, salary) => {
    return sum + salary;
  }, 0);
  return result;
}

console.log(totalSalary(employees));

// Check if ALL products are in stock AND priced under $100.

function allAffordableAndInStock(prodArray) {
  return prodArray.every(
    (product) => product.inStock === true && product.price < 100,
  );
}

console.log(allAffordableAndInStock(products));

// Check if ANY post has a "javascript" tag.

function hasJavaScriptTag(postsArray) {
  const onlyTags = postsArray.map((post) => post.tags);
  const result = onlyTags.some((tag) =>
    tag.some((tagg) => tagg === "javascript"),
  );
  return result;
}

console.log(hasJavaScriptTag(posts));
