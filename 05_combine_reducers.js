const todoReducer = (state = [], action = {}) => {
  const actions = {
    ADD_TODO: [...state, action.text]
  };
  const newState = actions[action.type];
  return newState !== undefined ? newState : state;
};

const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {}
    Object.entries(reducers).forEach(([stateKey, reducerFn]) => {
      newState[stateKey] = reducerFn(state[stateKey], action)
    })
    return newState
  };
};

module.exports = { todoReducer, combineReducers };
