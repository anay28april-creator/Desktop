import React, { useState } from 'react';
import './Widget.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="widget todo-widget">
      <h2>Todo List</h2>
      <div className="todo-input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="todo-add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="todo-empty">No tasks yet. Add one to get started!</div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
              <button
                className="todo-delete"
                onClick={() => deleteTodo(todo.id)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
