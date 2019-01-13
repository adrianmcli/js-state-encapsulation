const createStore = reducer => {
  // state is stored here, run reducer once for initial state
  let state = reducer();

  // this is basically your getter and setter
  const getState = () => state;
  const dispatch = action => (state = reducer(state, action));

  return Object.freeze({ getState, dispatch });
};

// the reducer takes in a state and an action, and returns a new state
const countReducer = (state = 0, action = {}) => {
  // this object defines the new state, keyed by action type
  const actions = {
    INCREMENT: state + 1,
    DECREMENT: state - 1,
  };

  // if action exists, return new state, otherwise return old state
  return action.type in actions ? actions[action.type] : state;
};

const makeCounter = () => {
  const { getState, dispatch } = createStore(countReducer);

  const get = () => getState();
  const inc = () => dispatch({ type: "INCREMENT" });
  const dec = () => dispatch({ type: "DECREMENT" });

  return Object.freeze({ get, inc, dec });
};

module.exports = {
  createStore,
  countReducer,
  makeCounter,
};
