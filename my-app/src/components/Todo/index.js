import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
import {
  InputBase,
  ListItem,
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import ClearIcon from '@material-ui/icons/Clear'
import { remove, toggle, show, edit } from '../../redux/slices/todos'
import useStyles from './styles'

function Todo({ todo }) {
  const classes = useStyles()
  const [userInput, setUserInput] = useState('')
  const dispatch = useDispatch()

  const getValue = (e) => {
    setUserInput(e.currentTarget.value)
  }
  function editTask(e) {
    if (e.key === 'Enter') {
      const editedTodo = {
        name: userInput,
        id: todo.id,
        complete: todo.complete,
      }
      batch(() => {
        dispatch(edit({ editedTodo }))
        dispatch(show())
      })
    }
  }
  const toggleTask = (e) => {
    dispatch(toggle({ todo }))
    dispatch(show())
  }
  const removeTask = () => {
    dispatch(remove({ todo }))
    dispatch(show())
  }

  return (
    <ListItem classes={{ root: classes.list }} key={todo.id}>
      <Checkbox
        onClick={toggleTask}
        checked={todo.complete ? true : false}
        icon={<RadioButtonUncheckedIcon classes={{ root: classes.uncheck }} />}
        checkedIcon={<CheckIcon classes={{ root: classes.check }} />}
      />
      <InputBase
        classes={
          todo.complete ? { root: classes.complete } : { root: classes.task }
        }
        onChange={getValue}
        onKeyPress={editTask}
        defaultValue={todo.name}
        fullWidth
      />
      <ListItemSecondaryAction>
        <IconButton
          classes={{ root: classes.delete }}
          aria-label="Delete"
          onClick={removeTask}
        >
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default Todo
