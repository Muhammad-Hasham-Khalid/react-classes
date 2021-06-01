import { useReducer } from 'react';

function Reducer(state, action) {
  // Pure function
  if (action.type === 'LOGIN') {
    return { ...state, user: action.payload };
  }
  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }
  if (action.type === 'UPDATE') {
    return { ...state, counts: state.counts + 1 };
  }
  return state;
}

const initialState = { user: null, counts: 0 };

export function UserDisplay() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function login() {
    const name = prompt('Enter your name');
    const action = {
      type: 'LOGIN',
      payload: name,
    };
    dispatch(action);
  }
  function logout() {
    dispatch({
      type: 'LOGOUT',
    });
  }
  function update() {
    dispatch({
      type: 'UPDATE',
    });
  }

  return (
    <div>
      <h1>{state.user}</h1>
      <p>{state.counts}</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={update}>Update</button>
    </div>
  );
}
