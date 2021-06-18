import React from 'react';
import {useSelector} from 'react-redux';
import List from '@material-ui/core/List';
import Todo from './Todo'
import '../styles/todo.css';


function TodoList() {
    const todos = useSelector((state) => state.todos.collection);

    return (
        <List>{todos.map((todo) =>{
            return (
            <Todo id='listItem' todo={todo} key={todo.id} dense button />)})}
        </List>
    );
}
export default TodoList;