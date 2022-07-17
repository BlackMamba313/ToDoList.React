import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, InputAdornment, InputBase } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { v4 as uuidv4 } from 'uuid'
import { add, show } from '../../redux/slices/todos'
import useStyles from './styles'

function TodoForm() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')

  const getValue = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (userInput) {
      // логика создания id
      const id = uuidv4()
      // логика completed
      const todo = {
        name: userInput,
        id: id,
        complete: false,
      }
      // TODO crate id for single todo

      dispatch(add({ todo }))
      dispatch(show())
      setUserInput('')
    }
  }

  return (
    <form onSubmit={addTask}>
      <TextField
        id="standard-basic"
        InputProps={{
          classes: { input: classes.text },

          startAdornment: (
            <InputAdornment
              classes={{ root: classes.startInput }}
              position="start"
            >
              <ExpandMoreIcon classes={{ root: classes.icon }} />
            </InputAdornment>
          ),
        }}
        fullWidth
        placeholder="What needs to be done?"
        onChange={getValue}
        value={userInput}
      />
    </form>
  )
}

export default TodoForm
