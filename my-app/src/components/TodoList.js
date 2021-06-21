import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Todo from './Todo'
import map from "lodash/map";
import '../styles/todo.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        padding: 0,
    },
});



function TodoList() {
    const classes = useStyles();
    const todos = useSelector((state) => state.todos.choiceCollection);


    return (
        <List className={classes.list} >
            {map(todos, (todo, index) => (
                <Todo todo={todo} key={index} />
            ))}
        </List>
    );
}
export default TodoList;