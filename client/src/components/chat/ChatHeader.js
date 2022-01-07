import React, { useContext } from "react";

import { UserConext } from "./../../context/Userprovider";

import {
  Box,
  Typography,
  makeStyles,
  IconButton,
  Avatar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AcountContext} from '../../context/Accountprovider'
const useStyles = makeStyles({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#EDEDED",
  },
  conversation: {
    flex: ".8",
    display: "flex",
    alignItems: "center",
    "&  p": {
      fontWeight: 600,
      textTransform: "capitalize",
    },
    "& p:last-of-type": {
        color: "#28A745",
        fontSize: '12px'
    },
  },
    title: {
      padding: '0 20px'
  },
  //   avatar: {
  //     width: "100%",
  //     height: "100%",
  //     flex: ".25",
  //   },
  //   online: {
  //     fontWeight: "600",
  //     color: "#28A745",
  //     },
  icons: {
    flex: ".2",
    textAlign: "right",
    padding: "30px 25px",
    "& > svg": {
      padding: "0 10px",
    },
  },
});

function ChatHeader() {
  const classes = useStyles();
  const { person } = useContext(UserConext);

  const {activeUser} = useContext(AcountContext)
  return (
    <Box className={classes.header}>
      <Box className={classes.conversation}>
        <Avatar
          className={classes.avatar}
          src={person.imageUrl}
          alt={person.name}
        />
        <Box className={classes.title}>
          <Typography>{person.name}</Typography>
          <Typography className={classes.online}>
            {activeUser?.find(user => user.userId === person.googleId )? 'Online' : "Offline"}
            
          </Typography>
        </Box>
      </Box>
      <Box className={classes.icons}>
        <SearchIcon />
        <MoreVertIcon />
      </Box>
    </Box>
  );
}

export default ChatHeader;
