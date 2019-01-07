const useReducer = (reducer, initState = {}) => {
  // state is stored here
  let state = initState;

  // this is basically your getter and setter
  const getState = () => state;
  const dispatch = action => (state = reducer(state, action));

  return Object.freeze({ getState, dispatch });
};

// the reducer takes in a state and an action, and returns a new state
const reducer = (state, action) => {
  // this object defines the new state, keyed by action type
  const actions = {
    increment: { count: state.count + 1 },
    decrement: { count: state.count - 1 },
  };

  // return new state, or old state if action does not exist
  return actions[action.type] || state;
};

const makeCounter = () => {
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
