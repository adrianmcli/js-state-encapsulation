const useReducer = (reducer, initState = {}) => {
  let state = initState;

  // type getState: () => state
  const getState = () => state;

  // type dispatch: action => ()
  const dispatch = action => (state = reducer(state, action));

  return Object.freeze({ getState, dispatch });
};

const makeCounter = () => {
  // type reducer: (state, action) => state
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const { getState, dispatch } = useReducer(reducer, { count: 0 });

  const get = () => getState().count;
  const inc = () => dispatch({ type: "increment" });
  const dec = () => dispatch({ type: "decrement" });

  return Object.freeze({ get, inc, dec });
};

const myCounter = makeCounter();

console.log(myCounter.get()); // 0
myCounter.inc();
myCounter.inc();
console.log(myCounter.get()); // 2
myCounter.dec();
myCounter.dec();
console.log(myCounter.get()); // 0
