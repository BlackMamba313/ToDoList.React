import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo';
import ControlPalel from './components/ControlPanel';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


function App() {



    const [todos, setTodos] = React.useState([])
    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    function clearCompleted() {
        setTodos([...todos.filter((todo) => !todo.complete)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
            )
        ])
    }
    
    

    function showTask(chose) {
        if(chose === 'all') { tasks = allTasks}
        else if(chose === 'actve') { tasks = activeTasks}
        else if(chose === 'complited') { tasks = compliteTasks}
    }
    
    let allTasks = todos
    let compliteTasks = [...todos].filter(todo => todo.complete)
    let activeTasks = [...todos].filter(todo => !todo.complete)


  return (
      <Container maxWidth="sm">
        <Header />
          <Paper id="paper" square>
              <TodoForm addTask={addTask} />
              {tasks.map((todo) => {
                  return (
                      <Todo
                          todo={todo}
                          key={todo.id}
                          toggleTask={handleToggle}
                          removeTask={removeTask}
                      />
                  )
              })}
              {(todos.length>0)&&<ControlPalel todos={todos}
                                               showTask={showTask}
                                               compliteTasks={compliteTasks}
                                               activeTasks={activeTasks}
                                               clearCompleted={clearCompleted}

              />}
     </Paper>
    </Container>
  );

}

export default App;
