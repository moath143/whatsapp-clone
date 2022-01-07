import React, {useContext} from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { AcountContext } from "../../context/Accountprovider";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "7px",
    maxWidth: "60%",
    width: "100%",
    wordBreak: "break-word",
  },
  text: {
    fontSize: "14px",

  },
  time: {
    fontSize: "10px",

  },
  own: {
    background: "#dcf8c6",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    padding: "10px",
    borderRadius: "7px",
    maxWidth: "70%",
      width: "fit-content",
      marginLeft: 'auto',
    flexDirection: 'row-reverse'
  },
});
function Message({ message }) {
    const classes = useStyles()
    const { account } = useContext(AcountContext);
    const formatDate = (date) => {
        return date < 10 ? "0" + date : date;
    }
    return (
      <Box className={ account.googleId === message.sender ? classes.own : classes.wrapper}>
        <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                
                {formatDate(new Date(message.createdAt).getHours())} : {formatDate(new Date(message.createdAt).getMinutes())}
            </Typography>
      </Box>
    );
  
}

export default Message;
