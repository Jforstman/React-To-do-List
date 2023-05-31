// user input - includes validation
function TodoForm({addTodo}){ //passed value of adding todos to this function
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value); //changed this to addTodo from previous on index.js.
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}