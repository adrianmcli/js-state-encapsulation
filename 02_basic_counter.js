const makeCounter = (initVal = 0) => {
  // value is stored here
  let count = initVal;

  // define methods
  const get = () => count;
  const set = x => (count = x);
  const inc = () => count++;
  const dec = () => count--;

  return Object.freeze({ get, set, inc, dec });
};

// create the counter object
const myCounter = makeCounter();

// these re-assignments do nothing because object is frozen
myCounter.get = null;
myCounter.set = null;

// let's test our counter
console.log(myCounter.get()); // 0
myCounter.set(2);
console.log(myCounter.get()); // 2
myCounter.inc();
myCounter.inc();
console.log(myCounter.get()); // 4
myCounter.dec();
myCounter.dec();
console.log(myCounter.get()); // 2
