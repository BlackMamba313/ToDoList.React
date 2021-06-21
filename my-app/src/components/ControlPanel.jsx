import { Button, Typography } from '@material-ui/core/';
import '../styles/controlPanel.css';
import {clear, select, show} from '../redux/slices/todos'
import { useDispatch, useSelector } from 'react-redux';
import filter from "lodash/filter"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        visibility: 'visible',
    },
    hiden: {
        visibility: 'hidden',
    },
});

function ControlPanel() {
    const classes = useStyles();
    const todos = useSelector((state) => state.todos.collection);
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
            <Typography component="h3" variant="inherit">{isActive.length} item left</Typography>
            <div>
                <Button onClick={showTask} >All</Button>
                <Button onClick={showTask} >Active</Button>
                <Button onClick={showTask} >Completed</Button>
            </div>
            <Typography
                className={(isComplited.length !== 0)?classes.text:classes.hiden}
                onClick={clearCompleted}component="h3"
                variant="inherit">Clear complited</Typography>
        </nav>
    );
}

export default ControlPanel