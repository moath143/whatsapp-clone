import React, {useContext} from "react";
import Login from '../account/Login'
import ChatBox from '../account/ChatBox'
import { AcountContext } from "../../context/Accountprovider";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#dcdcdc",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    backgroundColor: "#00BFA5",
    boxShadow: "none",
  },
  header: {
    height: 115,
      background: "#128c7e",
    boxShadow: 'none'
  },
});
function Messanger() {
    const classes = useStyles();
    const { account } = useContext(AcountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={ account ? classes.header : classes.loginHeader} position="fixed">
        <Toolbar></Toolbar>
          </AppBar>
          {account ? <ChatBox /> : <Login />}
    </Box>
  );
}

export default Messanger;
