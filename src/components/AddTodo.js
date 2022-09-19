import { useState } from "react";

const AddTodo = (props) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTodos((prevState) => [...prevState, todoInput]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default AddTodo;
