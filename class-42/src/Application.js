import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props); // parent's constructor, i.e Component here

    this.state = {
      counter: 0,
      todos: [],
    };

    // don't use bind due to performance instead use arrow functions
    // this.decrement = this.decrement.bind(this);
  }

  // will run when the component will mount
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    this.setState({
      todos: data.slice(0, 5),
    });
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  increment = () => {
    // updating state in class based components
    this.setState({
      counter: this.state.counter + 1,
    });
    // it will merge the state and the object passed here
  };

  decrement = () => {
    // console.log(this);
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const { counter, todos } = this.state;

    return (
      <div>
        <h1>Counter value: {counter}</h1>
        <button onClick={this.decrement}>DECREMENT</button>
        <button onClick={this.increment}>INCREMENT</button>
        <hr />
        <h1>Todos for {this.props.name}</h1>
        <ul>
          {todos.map(todo => (
            <li>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
