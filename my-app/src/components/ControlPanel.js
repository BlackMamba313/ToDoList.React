import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/controlPanel.css';

function ControlPanel({todos}) {

    return (
        <nav className='controlPanel'>
            <Typography component="h3" variant="inherit">{todos.length} item left</Typography>
            <div>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </div>
            <Typography component="h3" variant="inherit">Clear complited</Typography>
        </nav>
    );
}

export default ControlPanel