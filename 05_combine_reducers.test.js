const { createStore, countReducer } = require("./04_redux");
const { todoReducer, combineReducers } = require("./05_combine_reducers");

describe("redux revisited tests", () => {
  test("todoReducer", () => {
    const result1 = todoReducer([], { type: "ADD_TODO", text: "Buy bread" });
    const result2 = todoReducer(["Buy bread"], {
      type: "ADD_TODO",
      text: "Buy milk",
    });
    expect(result1).toEqual(["Buy bread"]);
    expect(result2).toEqual(["Buy bread", "Buy milk"]);
  });

  test("combineReducers", () => {
    const rootReducer = combineReducers({
      count: countReducer,
      todos: todoReducer,
    });

    const { getState, dispatch } = createStore(rootReducer);

    expect(getState()).toEqual({ count: 0, todos: [] });
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "ADD_TODO", text: "Buy bread" });
    expect(getState()).toEqual({ count: 1, todos: ["Buy bread"] });
    dispatch({ type: "DECREMENT" });
    dispatch({ type: "ADD_TODO", text: "Buy milk" });
    expect(getState()).toEqual({ count: 0, todos: ["Buy bread", "Buy milk"] });
  });
});
