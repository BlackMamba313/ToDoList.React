import React from 'react';
import List from '@material-ui/core/List';
import TodoList from './TodoList'

import '../styles/todotem.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';


const TodoItem = ({ todos, deleteTodo }) => (
  <List id='list'>
    {todos.map((todo, index) => (
      <ListItem id='listItem' key={index.toString()} dense button>
        <TodoList todo={todo} deleteTodo={deleteTodo} index={index} />
      </ListItem>
    ))}
  </List>
);

export default TodoItem;