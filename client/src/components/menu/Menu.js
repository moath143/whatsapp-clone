import React, {useState} from 'react'
import Header from './Header'
import Search from './Search'
import Conversations from './Conversations'
import { makeStyles, Box } from '@material-ui/core';


const useStyles = makeStyles({
    menu: {
        width: '100%'
    }
})
function Menu() {
    const classes = useStyles()
    const[text, setText] = useState()
    return (
        <Box className={classes.menu}>
            <Header />
            <Search setText={setText} />
            <Conversations text={text} />
        </Box>
    )
}

export default Menu
