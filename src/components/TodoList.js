
const TodoList = (props) => {

  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
