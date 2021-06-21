import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../styles/todo.css';
import { InputBase, ListItem, IconButton, Checkbox, ListItemSecondaryAction, } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ClearIcon from '@material-ui/icons/Clear';
import {remove, toggle, show, edit} from '../redux/slices/todos'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    check: {
        fontSize: 30,
        color: 'green',
    },
    uncheck: {
        fontSize: 30,
        color: '#c0c0c0',
    },
});



function Todo({todo}) {
    const classes = useStyles();
    const [userInput, setUserInput] = useState('')
    const dispatch = useDispatch();

    const getValue = (e) => {
        setUserInput(e.currentTarget.value)
    }
    function editTask(e){
        if (e.key === 'Enter') {
            const editedTodo = {
                name: userInput,
                id: todo.id,
                complete: todo.complete
            }
        dispatch(edit({editedTodo}))
        dispatch(show())
    }}
    const toggleTask = (e) => {
        dispatch(toggle({todo}))
        dispatch(show())
    }
    const removeTask = () => {
        dispatch(remove({todo}))
        dispatch(show())
    }

    return (
        <ListItem id='listItem' key={todo.id} dense button >
            <Checkbox onClick={toggleTask}
                      icon={<RadioButtonUncheckedIcon className={classes.uncheck} />}
                      checkedIcon={<CheckCircleOutlineRoundedIcon className={classes.check} />}
                      />
            <InputBase
                onChange={getValue}
                onKeyPress={editTask}
                className={todo.complete ? "item-text strike" : "item-text"}
                defaultValue={todo.name}
                fullWidth/>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={removeTask}>
                    <ClearIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ ListItem>
    );
}
export default Todo;