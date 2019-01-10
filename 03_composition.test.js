const { useState, makeCounter } = require("./03_composition");

describe("composition counter tests", () => {
  test("useState", () => {
    const { get, set } = useState(0);

    expect(get()).toBe(0);
    set(100);
    expect(get()).toBe(100);
  });

  test("makeCounter", () => {
    const myCounter = makeCounter();

    expect(myCounter.get()).toBe(0);
    myCounter.inc();
    expect(myCounter.get()).toBe(1);
    myCounter.dec();
    expect(myCounter.get()).toBe(0);
  });
});
