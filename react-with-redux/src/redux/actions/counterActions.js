export const increment = () => ({
  type: 'INCREMENT',
  payload: 1,
});

export const decrement = () => ({
  type: 'DECREMENT',
  payload: 1,
});

export const reset = () => {
  // the function below is a thunk
  /* thunk ==> */ return async dispatch => {
    // do some async task here

    await new Promise(resolve => setTimeout(resolve, 2000));

    return dispatch({
      type: 'RESET',
    });
  };
};
