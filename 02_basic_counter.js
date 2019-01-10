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

module.exports = { makeCounter };
