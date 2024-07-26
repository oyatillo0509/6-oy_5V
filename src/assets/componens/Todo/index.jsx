import React, { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-app">
        <h1>Todo App</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add your new todo"
          />
          <button onClick={addTodo} className="add-button">
            +
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                DEL
              </button>
            </li>
          ))}
        </ul>
        <div className="footer">
          <span>You have {todos.length} pending tasks</span>
          <button className="clear-all" onClick={() => setTodos([])}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
