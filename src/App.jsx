import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editIndex !== null) {
      const copyTodo = [...todo];
      copyTodo[editIndex] = input;
      setTodo(copyTodo);
      setEditIndex(null);
    } else {
      setTodo([...todo, input]);
    }

    setInput("");
  };

  const deleteTodo = (indexValue) => {
    const updatedTodo = todo.filter((item, index) => {
      return index !== indexValue;
    });

    setTodo(updatedTodo);
  };

  const editTodo = (indexValue) => {
    setInput(todo[indexValue]);
    setEditIndex(indexValue);
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {todo.length === 0 ? (
        <h4 className="empty">No Todos Added Yet</h4>
      ) : (
        todo.map((item, index) => {
          console.log(item)
          return (
            <div className="todo-item" key={index}>
              <h4>{item}</h4>

              <div className="todo-actions">
                <button
                  className="edit-btn"
                  onClick={() => editTodo(index)}
                  type="button"
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(index)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;