import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api.js";
import { Box } from "@material-ui/core";
import Conversation from "./Conversation";
import { AcountContext } from "./../../context/Accountprovider";

function Conversations({ text }) {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUser } = useContext(AcountContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) => user.name.includes(text));
      setUsers(filteredData);
      console.log('this is data ',data);
    };
    fetchData();
  }, [text]);

  
  useEffect(() => {
    socket.current.emit("addUserSocket", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUser(users);
    });
  }, [account]);


  return (
    <Box>
      {users.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </Box>
  );
}

export default Conversations;
