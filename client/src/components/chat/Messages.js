import React, { useState, useContext, useEffect, useRef } from "react";
import { Box, makeStyles } from "@material-ui/core";
import Footer from "./Footer";
import { AcountContext } from "../../context/Accountprovider";
import { newMessage, getMessages } from "../../service/api.js";
import Message from "./Message.js";
const backgroundImage =
  "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "50%",
  },
  component: {
    height: "72vh",
    overflowY: "scroll",
  },
  container: {
    padding: "6px 50px",
  },
});

function Messages({ conversation, person }) {
  const [value, setValue] = useState();
  const { account, socket, setNewMessageFlag, newMessageFlag } =
    useContext(AcountContext);
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({trnsition: 'smoth'})
  }, [])

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  socket.current.on("getMessage", (data) => {});
  useEffect(() => {
    const getMessageDetails = async () => {
      let res = await getMessages(conversation._id);
      setMessages(res.data);
    };
    getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  const reciverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );
  const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        reciverId,
        text: value,
      });
      await newMessage(message);
      setValue("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.component}>
        {messages &&
          messages.map((message) => (
            <Box className={classes.container}   ref={scrollRef} >
              <Message message={message} />
            </Box>
          ))}
      </Box>
      <Footer value={value} setValue={setValue} sendText={sendText} />
    </Box>
  );
}

export default Messages;
