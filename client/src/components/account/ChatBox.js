import React, {useContext} from "react";
import { UserConext } from "../../context/Userprovider";
import EmptyChat from "../chat/EmptyChat";
import { Dialog, withStyles, Box, makeStyles } from "@material-ui/core";
import Menu from '../menu/Menu'
import Chat from "../chat/Chat";
const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    display: "flex",
    flex: ".25",
    //   width: '25%'
  },
  rightCompnent: {
    display: "flex",
    flex: ".75",
    //   width: '75%'
  },
});
const style = {
  dialogPaper: {
    height: "95%",
    width: "100%",
    borderRaduis: "0",
    boxShadow: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};
function ChatBox({ classes }) {
  const classname = useStyles();
  const { person } = useContext(UserConext);
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightCompnent}>
          {
            Object.keys(person).length ? <Chat /> : <EmptyChat />
          }
        </Box>
      </Box>
    </Dialog>
  );
}

export default withStyles(style)(ChatBox);
