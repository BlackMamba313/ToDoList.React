import '../styles/header.css';
import Typography from '@material-ui/core/Typography';

function Header() {
    return (
    <header>
      <Typography component="h1" variant="inherit">
        todos
      </Typography>
    </header>
    );
  }

export default Header