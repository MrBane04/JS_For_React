const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Jan", age: 30 },
  { id: 3, name: "Ewa", age: 19 },
  { id: 4, name: "Agnieszka", age: 2 },
];

// Mini A1 — Objects and Transformations

// Create an array of user names.
// Get all users who are adults.
// Calculate the average age of users.
// Convert the array into an object in the form { [id]: user }.
// Create a new array where each user has an isAdult property set to true or false.

// Create an array of user names.

function arrayNames(users) {
  return users.map((user) => user.name);
}
console.log(arrayNames(users));

// Get all users who are adults.

function getAdults(users) {
  return users.filter((user) => user.age >= 18);
}
console.log(getAdults(users));

// Calculate the average age of users.

function avgUsersAge(users) {
  const sum_age = users.reduce((sum, users) => {
    return sum + users.age;
  }, 0);
  return sum_age / users.length;
}
console.log(avgUsersAge(users));

// Convert the array into an object in the form { [id]: user }.

function arrayIntoObject(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}
console.log(arrayIntoObject(users));

// Create a new array where each user has an isAdult property set to true or false.
console.log("last exercise");
function addIsAdult(users) {
  return users.map((user) => {
    return { ...user, isAdult: user.age >= 18 ? true : false };
  });
}
console.log(addIsAdult(users));
