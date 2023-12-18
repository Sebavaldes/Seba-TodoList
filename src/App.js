import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nuevoTodo, setNuevoTodo] = useState("");
  const [todos, setTodos] = useState([])

  const agregarTarea = () => {
    if (nuevoTodo.trim() !== "") {
      setTodos([...todos, nuevoTodo]);
      setNuevoTodo("");
    }
  }

  const deleteTodo = (indice) => {
    const listaNueva = todos.filter((todo, i) => i !== indice)
    setTodos(listaNueva);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      agregarTarea();
    }
  }

  const handleChange = (event) => {
    setNuevoTodo(event.target.value);
  }

  return (
    <div className="text-center todo-container">
      <h1 className='mt-5'>Tareas</h1>
      <div className="input-group mb-3 todo-input">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar tarea"
          value={nuevoTodo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <ul className="list-group">
        {todos.map((todo, indice) => (
          <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTodo(indice)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;