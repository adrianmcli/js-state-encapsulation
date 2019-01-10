const { makeCounter } = require("./02_basic_counter");

describe("basic counter tests", () => {
  test("makeCounter", () => {
    const myCounter = makeCounter();

    expect(myCounter.get()).toBe(0);
    myCounter.inc();
    expect(myCounter.get()).toBe(1);
    myCounter.dec();
    expect(myCounter.get()).toBe(0);
    myCounter.set(100);
    expect(myCounter.get()).toBe(100);
  });
});
