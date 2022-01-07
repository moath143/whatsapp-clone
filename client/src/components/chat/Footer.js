import React from "react";
import { Box, makeStyles, InputBase } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#ededed",
    height: "55px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "& svg": {
      padding: "0 5px",
      color: "#919191",
    },

    "& svg:nth-of-type(2)": {
      transform: "rotate(40deg)",
    },
  },
  input: {
    margin: "0 0 0 10px",
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: "100px",
  },
  inputInput: {
    padding: theme.spacing(1.3, 0, 1.3, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  inputRoot: {
    color: "inherit",
  },

}));
function Footer({ sendText, setValue, value }) {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <EmojiEmotionsIcon />
      <AttachFileIcon />
      <Box className={classes.input}>
        <InputBase
          placeholder="Type your message"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          //   inputProps={{ "aria-label": "search" }}
          onKeyPress={(e) => {
            sendText(e);
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </Box>
      <MicIcon />
    </Box>
  );
}

export default Footer;
