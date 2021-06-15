import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem';
import ControlPalel from './components/ControlPanel';
import useTodoState from './components/useTodoState';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
function App() {
   const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
      <Container maxWidth="sm">
        <Header />
          <Paper id="paper" square>
              <TodoForm
                  saveTodo={todoText => {
                      const trimmedText = todoText.trim();

                      if (trimmedText.length > 0) {
                          addTodo(trimmedText);
                      }
                  }}
              />
              <TodoItem todos={todos} deleteTodo={deleteTodo} />
     <ControlPalel todos={todos} />
     </Paper>
    </Container>
  );

}

export default App;
