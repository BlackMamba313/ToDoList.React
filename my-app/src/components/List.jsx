import React from 'react';
import '../styles/list.css';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function List() {
  const [todos, setTodos] = React.useState([]);

  function handleAddTask(e) {
    e.preventDefault()
    const newTodo = e.target.lastElementChild;
    setTodos([...todos, newTodo.value])
    newTodo.value = '';
  }

console.log(todos)

  return (
    <Paper className="paper">
    <form onSubmit={handleAddTask} >
      <TextField id="standard-basic"  className="InputDeed" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ExpandMoreIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        placeholder="What needs to be done?" />
    </form>
    
    {todos.map((todo, i) => (
    <TextField id="standard-basic" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ExpandMoreIcon />
            </InputAdornment>
          ),
        }} fullWidth key={i}>{todo}</TextField>))}

    <nav className='controlPanel'>
      <h3>{todos.length} item left</h3>
      <div>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
      </div>
      <h3>Clear complited</h3>
    </nav>
  </Paper>
  )
}

export default List