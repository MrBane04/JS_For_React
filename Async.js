// Day 5 — Async

// Do the following:

// Create a function that waits 2 seconds (setTimeout + Promise).
function wait2sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("waited 2 sec");
    }, 2000);
  });
}
async function run() {
  const result = await wait2sec();
  return result;
}
run().then((result) => console.log(result));
// Create an async function that calls it 3 times in sequence.
async function call3times() {
  const x = await wait2sec();
  const y = await wait2sec();
  const z = await wait2sec();
  return [x, y, z];
}
call3times().then((result) => console.log(result));
// Create a function that runs 3 calls in parallel (Promise.all).

async function parallelCalls() {
  const result = await Promise.all([wait2sec(), wait2sec(), wait2sec()]);
  return result;
}
parallelCalls().then((result) => console.log(result));

// Add try/catch.

async function parallelCallsWithTryCatch() {
  try {
    const result = await Promise.all([wait2sec(), wait2sec(), wait2sec()]);
    return result;
  } catch (err) {
    throw new Error("blad");
  }
}
parallelCallsWithTryCatch()
  .then((r) => console.log(r))
  .catch((e) => console.error(e));
