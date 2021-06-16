import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';


const TodoList = ({ todo, deleteTodo , index}) => (
<>
                <Checkbox size='medium' icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineRoundedIcon />} disableRipple />
                <ListItemText id='textList' primary={todo} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <ClearIcon />
                    </IconButton>
                </ListItemSecondaryAction>
</>
);

export default TodoList;