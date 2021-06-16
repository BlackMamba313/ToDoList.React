import React from 'react';
import List from '@material-ui/core/List';
import '../styles/todo.css';
import ListItem from '@material-ui/core/ListItem';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function Todo({ todo, toggleTask, removeTask }) {
    return (<List>


        <ListItem id='listItem' key={todo.id} dense button>
            <Checkbox onClick={() => toggleTask(todo.id)}
                      size='medium'
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleOutlineRoundedIcon />}
                      disableRipple />
            <ListItemText
                id='Task'
                className={todo.complete ? "item-text strike" : "item-text"}
                      primary={todo.task} />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={() => removeTask(todo.id)}>
                    <ClearIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </List>
    );
}
export default Todo;