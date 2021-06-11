import React from 'react';
import './App.css';
import './styles/list.css';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <>
     <Header />
     <Paper id="paper" square>
     <TodoForm saveTodo={todoText => {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  }} />
     <TodoList
  todos={todos}
deleteTodo={todoIndex => {
    const newTodos = todos
      .filter((_, index) => index !== todoIndex); 
    setTodos(newTodos);
  }}


/>
     <nav className='controlPanel'>
      <h3>{todos.length} item left</h3>
      <div>
      <Button variant="outlined" disableRipple >All</Button>
      <Button disableRipple>Active</Button>
      <Button disableRipple>Completed</Button>
      </div>
      <h3>Clear complited</h3>
    </nav>
     </Paper>
    </>
  );
}

export default App;
