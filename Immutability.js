const state = {
  count: 0,
  user: { name: "Kuba", age: 21 },
  items: [1, 2, 3],
};

// Create functions that:

// Increase count.
// Change the user’s name.
// Add an item to items.
// Remove an item from items.
// No mutations — the original object must remain unchanged.

// Increase count.

function increaseCount(state) {
  return { ...state, count: state.count + 1 };
}
console.log(state);
console.log(increaseCount(state));
console.log(state);
// Change the user’s name.

function changeUserName(newName, state) {
  return { ...state, user: { ...state.user, name: newName } };
}
console.log(changeUserName("Macrin", state));
console.log(state);

// Add an item to items.
// const state = {
//   count: 0,
//   user: { name: "Kuba", age: 21 },
//   items: [1, 2, 3],
// };
function addItem(item, state) {
  return { ...state, items: [...state.items, item] };
}

console.log(addItem(5, state));
console.log(state);

// Remove an item from items.

function removeItem(itemToRemove, state) {
  return {
    ...state,
    items: state.items.filter((item) => item !== itemToRemove),
  };
}

console.log(removeItem(1, state));
console.log(state);
