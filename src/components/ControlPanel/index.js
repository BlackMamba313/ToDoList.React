import { Button, Typography, Grid } from '@material-ui/core/'
import { clear, select, show } from '../../redux/slices/todos'
import { useDispatch, useSelector } from 'react-redux'
import filter from 'lodash/filter'
import useStyles from './styles'

function ControlPanel() {
  const classes = useStyles()
  const todos = useSelector((state) => state.todos.collection)
  const choice = useSelector((state) => state.todos.choice)
  const dispatch = useDispatch()
  const showTask = (e) => {
    const filter = e.target.textContent
    dispatch(select({ filter }))
    dispatch(show())
  }
  const clearCompleted = () => {
    dispatch(clear())
    dispatch(show())
  }

  const isActive = filter(todos, (todo) => !todo.complete)
  const isComplited = filter(todos, (todo) => todo.complete)
  return (
    <Grid
      classes={{ root: classes.grid }}
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Typography
        classes={{ root: classes.text }}
        component="h3"
        variant="inherit"
      >
        {isActive.length} {isActive.length > 1 ? 'items' : 'item'} left
      </Typography>
      <div>
        <Button
          classes={
            choice === 'All'
              ? { root: classes.activButton, label: classes.buttonText }
              : { root: classes.button, label: classes.buttonText }
          }
          onClick={showTask}
        >
          All
        </Button>
        <Button
          classes={
            choice === 'Active'
              ? { root: classes.activButton, label: classes.buttonText }
              : { root: classes.button, label: classes.buttonText }
          }
          onClick={showTask}
        >
          Active
        </Button>
        <Button
          classes={
            choice === 'Completed'
              ? { root: classes.activButton, label: classes.buttonText }
              : { root: classes.button, label: classes.buttonText }
          }
          onClick={showTask}
        >
          Completed
        </Button>
      </div>
      <Typography
        classes={
          isComplited.length !== 0
            ? { root: classes.clear }
            : { root: classes.hiden }
        }
        onClick={clearCompleted}
        component="h3"
        variant="inherit"
      >
        Clear complited
      </Typography>
    </Grid>
  )
}

export default ControlPanel
