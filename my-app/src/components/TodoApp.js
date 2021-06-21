import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import ControlPalel from './ControlPanel';
import { Paper, Container } from '@material-ui/core';



function TodoApp() {
    const todos = useSelector((state) => state.todos.collection);

    return (
        <Container maxWidth="sm">
            <Header />
            <Paper id="paper" square>
                <TodoForm />
                <TodoList/>
                {(todos.length!==0)&&<ControlPalel />}
            </Paper>
        </Container>
    );

}

export default TodoApp;