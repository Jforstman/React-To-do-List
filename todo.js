function Todo({todo, index, remove}){
  function handle(){
    remove(index);
  }
  return <div className="todo-list" onClick={handle}>{todo.text}(-)</div>;
}