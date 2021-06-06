import { useEffect, useState } from 'react';
import styled from 'styled-components';

// firebase
// tailwind
// styled components

const Heading = styled.h1`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;

  &:hover {
    color: green;
  }
`;

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      setTodos(data.slice(0, 5));
    }
    fetchTodos();
  }, []);

  // background-color: backgroundColor

  return (
    <div>
      <Heading>Counter value: {counter}</Heading>
      <button
        onClick={decrement}
        style={{
          backgroundColor: 'greenyellow',
        }}
      >
        DECREMENT
      </button>
      <button onClick={increment}>INCREMENT</button>
      <hr />
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
