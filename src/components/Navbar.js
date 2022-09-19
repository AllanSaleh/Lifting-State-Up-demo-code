const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>Todo List App</h1>
      <h2>Total Todos: {props.todos.length}</h2>
    </div>
  );
};

export default Navbar;
