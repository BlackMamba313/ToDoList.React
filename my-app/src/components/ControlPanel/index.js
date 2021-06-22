import { Button, Typography } from '@material-ui/core/';
import '../../styles/controlPanel.css';
import {clear, select, show} from '../../redux/slices/todos'
import { useDispatch, useSelector } from 'react-redux';
import filter from "lodash/filter"
import useStyles from './styles';
// const useStyles = makeStyles({
//     text: {
//         visibility: 'visible',
//     },
//     hiden: {
//         visibility: 'hidden',
//     },
// });

function ControlPanel() {
    const classes = useStyles();
    const todos = useSelector((state) => state.todos.collection);
    let choice = useSelector((state) => state.todos.choice);
    const dispatch = useDispatch();
    const showTask = (e) => {
        const filter = e.target.textContent
        dispatch(select({filter}))
        dispatch(show())
    }
    const clearCompleted = () => {
        dispatch(clear())
        dispatch(show())
    }

    const isActive = filter(todos, todo => !todo.complete)
    const isComplited = filter(todos, todo => todo.complete)
    return (
        <nav className='controlPanel'>
            <Typography classes={{root: classes.text}} component="h3" variant="inherit">{isActive.length} item left</Typography>
            <div>
                <Button classes={(choice=='All'?{root: classes.activButton}:{root: classes.button})}
                        onClick={showTask}  >All</Button>
                <Button classes={choice=='Active'?{root: classes.activButton}:{root: classes.button}}
                        onClick={showTask} >Active</Button>
                <Button classes={choice=='Completed'?{root: classes.activButton}:{root: classes.button}}
                        onClick={showTask} >Completed</Button>
            </div>
            <Typography
                classes={(isComplited.length!==0)?{root: classes.clear}:{root: classes.hiden}}
                onClick={clearCompleted}component="h3"
                variant="inherit">Clear complited</Typography>
        </nav>
    );
}

export default ControlPanel