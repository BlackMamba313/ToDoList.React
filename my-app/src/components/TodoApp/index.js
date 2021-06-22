import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/index';
import TodoForm from '../TodoForm/index'
import TodoList from '../TodoList/index';
import ControlPalel from '../ControlPanel/index';
import { Paper, Container } from '@material-ui/core';
import useStyles from './styles';


function TodoApp() {
    const todos = useSelector((state) => state.todos.collection);
    const classes = useStyles();
    return (
        <Container  classes={{root: classes.root}}>
            <Header />
            <Paper id="paper" square>
                <TodoForm />
                <TodoList/>
                {(todos.length!==0)&&<ControlPalel />}
            </Paper>
        </Container>
    );

}

export default TodoApp