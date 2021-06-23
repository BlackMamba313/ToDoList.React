import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  activButton: {
    border: '#e89e99 1px solid',
  },
  button: {
    border: 'none',
  },
  clear: {
    visibility: 'visible',
    fontWeight: 100,
    fontSize: 16,
    cursor: 'pointer',
  },
  hiden: {
    visibility: 'hidden',
  },
  text: {
    width: 77,
    display: 'block',
    fontWeight: 100,
    fontSize: 16,
  },
  buttonText: {
    textTransform: 'none',
    fontWeight: 100,
    fontSize: 16,
    color: '#635f5c',
  },
  grid: {
    padding: 15,
  },
})

export default useStyles
