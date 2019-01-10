const { createStore, reducer, makeCounter } = require("./04_redux");

describe("redux counter tests", () => {
  test("createStore", () => {
    const reducer = (state, action) =>
      action.type === "increment" ? state + 1 : state;

    const { getState, dispatch } = createStore(reducer, 0);

    expect(getState()).toBe(0);
    dispatch({ type: "increment" });
    expect(getState()).toBe(1);
  });

  test("reducer", () => {
    const result1 = reducer({ count: 0 }, { type: "increment" });
    const result2 = reducer({ count: 0 }, { type: "decrement" });
    const result3 = reducer({ count: 0 }, { type: "bad action" });
    expect(result1).toEqual({ count: 1 });
    expect(result2).toEqual({ count: -1 });
    expect(result3).toEqual({ count: 0 });
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
