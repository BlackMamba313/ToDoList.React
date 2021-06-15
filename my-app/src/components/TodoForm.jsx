import React from 'react';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = useInputState();

  return (
      <form
          onSubmit={event => {
              event.preventDefault();
              saveTodo(value);
              reset();
          }}
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
                 onChange={onChange}
        value={value}
      />
   </form>
  );
};

export default TodoForm