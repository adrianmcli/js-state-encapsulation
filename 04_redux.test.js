const { createStore, countReducer, makeCounter } = require("./04_redux");

describe("redux counter tests", () => {
  test("createStore", () => {
    const reducer = (state = 0, action = {}) =>
      action.type === "INCREMENT" ? state + 1 : state;

    const { getState, dispatch } = createStore(reducer);

    expect(getState()).toBe(0);
    dispatch({ type: "INCREMENT" });
    expect(getState()).toBe(1);
  });

  test("countReducer", () => {
    const result1 = countReducer(0, { type: "INCREMENT" });
    const result2 = countReducer(0, { type: "DECREMENT" });
    const result3 = countReducer(0, { type: "BAD_ACTION" });
    expect(result1).toEqual(1);
    expect(result2).toEqual(-1);
    expect(result3).toEqual(0);
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
