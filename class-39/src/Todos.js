import { useEffect, useState } from "react"

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos () {
      // await new Promise(res => setTimeout(res, 3000));
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setTodos(data.slice(10));
    }
    getTodos();
  }, [])

  return (
    <>
      {todos.map(todo => <li key={todo.title}>{todo.title}</li>)}
    </>
  )
}

export default Todos;