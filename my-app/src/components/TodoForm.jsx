import React from 'react';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from '@material-ui/core/InputAdornment';

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = React.useState('');

  return (
    <form 
        onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        setValue('');
      }}>
      <TextField id="standard-basic"  className="InputDeed" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ExpandMoreIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        placeholder="What needs to be done?"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />
   </form>
  );
};

export default TodoForm