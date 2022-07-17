import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  list: {
    boxShadow:
      ' ' +
      '0 1px 1px rgba(0,0,0,.15),' +
      '0 10px 0 -5px #eee,' +
      '0 10px 0 -5px #eee, ' +
      '0 10px 1px -4px rgba(0,0,0,.15),' +
      '0 20px 0 -10px #eee,' +
      '0 20px 1px -9px rgba(0,0,0,.15),' +
      '0 20px 7px 15px  rgba(0,0,0,.08)',
  },
})

export default useStyles
