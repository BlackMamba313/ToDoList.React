import React from 'react';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';

function TodoForm({ addTask }) {
    const [userInput, setUserInput] = React.useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }


  return (
      <form onSubmit={handleSubmit}
      >
      <TextField size="medium" id="standard-basic"  InputProps={{
          startAdornment: (
            <InputAdornment  position="start">
              <ExpandMoreIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={userInput}
      />
   </form>
  );
};

export default TodoForm