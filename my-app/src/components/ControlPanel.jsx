import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/controlPanel.css';

function ControlPanel({todos, showTask, clearCompleted, activeTasks, completeTasks}) {



    return (
        <nav className='controlPanel'>
            <Typography component="h3" variant="inherit">{activeTasks.length} item left</Typography>
            <div>
                <Button onClick={ () => showTask('all')} >All</Button>
                <Button onClick={ () => showTask('active')} >Active</Button>
                <Button onClick={ () => showTask('complited')} >Completed</Button>
            </div>
            <Typography onClick={ () => clearCompleted()}component="h3" variant="inherit">Clear complited</Typography>
        </nav>
    );
}

export default ControlPanel