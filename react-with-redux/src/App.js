import { useSelector, useDispatch, connect } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './redux/actions/counterActions';

function App({ counter, dispatch }) {
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.value}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      {/* <div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </div> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   increment: () => dispatch(increment()),
  //   decrement: () => dispatch(decrement()),
  //   reset: () => dispatch(reset()),
  // };
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
