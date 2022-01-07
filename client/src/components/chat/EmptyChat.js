import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#F8FAFB",
    width: "100%",
    height: "100%",
    padding: "50px 0",
    textAlign: 'center'
    },
    image: {
        width: 420
    }
});
function EmptyChat() {
  const classes = useStyles();
  const url =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";
  return (
    <Box className={classes.component}>
      <img className={classes.image} src={url} alt="empty" />
    </Box>
  );
}

export default EmptyChat;
