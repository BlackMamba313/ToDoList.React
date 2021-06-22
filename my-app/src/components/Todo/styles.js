import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    uncheck: {
        fontSize: 35,
        color: 'Silver',
        opacity: '0.2',
    },
    check: {
        fontSize: 25,
        padding: 2,
        color: 'green',
        opacity: '0.4',
        border: "3px solid #DCDCDC" ,
        borderRadius: 50
    },
    delete: {
        fontSize: 30,
        color: 'Peru',
        opacity: '0.6',
    },
    task: {
        fontSize: 25,
        fontWeight: 100,
    },
    complete: {
        fontSize: 25,
        fontWeight: 100,
        textDecoration: 'line-through',
        color: '#b2b2b2',
    },
    list: {
        borderBottom: 'rgba(0, 0, 0,.1) solid 1px'
    },

})


export default useStyles