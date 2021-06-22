import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    activButton:{
        border: '#e89e99 1px solid'
    },
    button:{
        border: 'none'
    },
    clear:{
        visibility: 'visible',
        fontWeight: 100,
        fontSize: 16,
        cursor: 'pointer',
    },
    hiden:{
        visibility: 'hidden',
    },
    text:{
        fontWeight: 100,
        fontSize: 16,
    },
    buttonText:{
        visibility: 'hidden',
    },
})


export default useStyles