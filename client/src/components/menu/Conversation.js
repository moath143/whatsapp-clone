import React, { useContext, useState, useEffect } from "react";
import { AcountContext } from "../../context/Accountprovider";
import { setConversation, getConversation } from "../../service/api";
import { UserConext } from "../../context/Userprovider";
import {
  Box,
  Typography,
  Avatar,
  makeStyles,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles({
  conversation: {
    display: "flex",
    alignItems: "center",
    borderRadius: "0",
    width: "100%",
    margin: "0",
  },
  title: {
    paddingLeft: "30px",
    flex: ".75",
  },
  avatar: {
    width: "100%",
    height: "100%",
    flex: ".25",
  },
});
function Conversation({ user }) {
  const classes = useStyles();
  const { account, newMessageFlag } = useContext(AcountContext);
  const { setPerson } = useContext(UserConext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        sender: account.googleId,
        reciver: user.googleId,
      });
      setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      reciverId: user.googleId,
    });
  };

  return (
    <Box
      key={Math.random()}
      onClick={() => {
        setUser();
      }}
    >
      <IconButton className={classes.conversation}>
        <Avatar
          className={classes.avatar}
          src={user.imageUrl}
          alt={user.name}
        />
        <Typography className={classes.title}>{user.name}</Typography>
        {message.text && (
          <Typography>
            {new Date(message.timestamp).getHours()} :{" "}
            {new Date(message.timestamp).getMinutes()}
          </Typography>
        )}
        <Box>
          <Typography>{message.text}</Typography>
        </Box>
      </IconButton>
    </Box>
  );
}

export default Conversation;
