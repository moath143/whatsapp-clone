import React, { useState, useEffect, useContext } from "react";
import { Box, makeStyles } from "@material-ui/core";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { UserConext } from "../../context/Userprovider";
import { AcountContext } from "../../context/Accountprovider";
import { getConversation } from "../../service/api.js";
const useStyles = makeStyles({
  component: {
    width: "100%",
  },
});


function Chat() {
  const { person } = useContext(UserConext);
  const { account } = useContext(AcountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        reciver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.googleId]);
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <ChatHeader />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
}

export default Chat

