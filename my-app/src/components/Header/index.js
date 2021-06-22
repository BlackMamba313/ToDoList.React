import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function Header() {
    const classes = useStyles();

    return (
    <header>
      <Typography align='center'
                  component="h1"
                  variant="inherit"
                  classes={{root: classes.root}}>
        todos
      </Typography>
    </header>
    );
  }

export default Header