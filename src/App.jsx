import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const deleteTodo = (indexValue) => {
    const updatedTodo = todo.filter((item, index) => {
      return index !== indexValue;
    });

    setTodo(updatedTodo);
  };

  return (
    <div className="App">

      <form onSubmit={(e) => {
        e.preventDefault();

        // if (input.trim() === "") return;

        setTodo([...todo, input]);
        setInput("");
      }}>

        <input
          type="text"
          value={input}
          placeholder="Enter todo..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {todo.map((eachInput, index) => {
        return (
          <div className="todo-item" key={index}>
            <h4>{eachInput}</h4>

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        );
      })}

    </div>
  );
}

export default App;