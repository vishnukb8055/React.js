import React, { useState } from 'react';
function TodoListChild({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {todo.task}
        </li>
      ))}
    </ul>
  );
}
function TodoListParent() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Write code", completed: true }
  ]);
  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListChild todos={todos} onToggle={handleToggle} />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <TodoListParent />
    </div>
  );
}
export default App;
