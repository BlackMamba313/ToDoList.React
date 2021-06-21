import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#e7d7d6',
        fontWeight: 100,
        fontSize: 120,
    },
});

function Header() {
    const classes = useStyles();

    return (
    <header>
      <Typography align='center' component="h1" variant="inherit" classes={{root: classes.root}}>
        todos
      </Typography>
    </header>
    );
  }

export default Header