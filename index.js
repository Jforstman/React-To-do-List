function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }       
  ]);

  const addTodo = text => { //this is the new function added that passes to TodoForm function on form.js.
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);  //this is previous code that was in handleSubmit function.
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => <Todo index={i} key= {i}todo={todo} remove={removeTodo}/>)}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
