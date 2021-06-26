const {
  combineReducers,
  createStore,
  applyMiddleware,
  bindActionCreators,
  compose,
} = Redux;

// action Creator
const createAddAction = () => {
  return {
    type: 'ADD',
    payload: 1,
  };
};

// action
const addAction = {
  type: 'ADD',
  payload: 1,
};

// The state inside the store is just an object
const initialCounterState = { value: 0 };

function counterReducer(state = initialCounterState, action) {
  if (action.type === 'ADD') {
    const newState = { value: state.value + action.payload };
    return newState;
  }
  return state;
}

const initialErrorState = { message: '' };

function errorReducer(state = initialErrorState, action) {
  return state;
}

// creating Root reducer
// when we dispatch an action it passes through all the reducers
const rootReducer = combineReducers({
  error: errorReducer,
  count: counterReducer,
});

// creating a logging middleware
const logger = ({ getState }) => {
  return function (next) {
    return function (action) {
      console.log('MIDDLEWARE', getState(), action);
      const value = next(action);
      console.log({ value });
      return value;
    };
  };
};

// creating global store
// redux devtools extension
// thunk
// redux-logger
// redux-observable, redux-saga, redux-phoenix
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// update state
store.dispatch(createAddAction());

// get updated state
store.getState();

// subscription: listen to the changes happening in the store
function subscriber() {
  const { count } = store.getState();
  document.getElementById('count').textContent = count.value;
}

// subscriber will be called as soon as something changes in the store
store.subscribe(subscriber);

// it will bind the action creator with the given dispatch function
const boundActionCreators = bindActionCreators(
  { createAddAction },
  store.dispatch
);

boundActionCreators.createAddAction();
