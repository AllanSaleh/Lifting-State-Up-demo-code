import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["item 1", "item 2", "item 3"]);

  return (
    <div className="App">
      <Navbar todos={todos}/>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
