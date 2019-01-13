const todoReducer = (state = [], action = {}) => {
  const actions = {
    ADD_TODO: [...state, action.text],
  };
  return action.type in actions ? actions[action.type] : state;
};

const combineReducers = reducers => (state = {}, action) => {
  const newState = {};

  // build the new state by running the reducer for each slice of state
  Object.entries(reducers).forEach(([stateKey, reducerFn]) => {
    newState[stateKey] = reducerFn(state[stateKey], action);
  });

  return newState;
};

module.exports = { todoReducer, combineReducers };
