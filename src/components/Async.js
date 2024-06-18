import React, { useEffect, useState } from "react";
const api = "https://jsonplaceholder.typicode.com/todos";
const Async = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
console.log(todo[0]);
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
