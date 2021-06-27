const initialCounterState = {
  value: 0,
};

export function counterReducer(state = initialCounterState, action) {
  if (action.type === 'INCREMENT') {
    const newState = { value: state.value + action.payload };
    return newState;
  }
  if (action.type === 'DECREMENT') {
    return { value: state.value - action.payload };
  }
  if (action.type === 'RESET') {
    return { value: 0 };
  }
  return state;
}
