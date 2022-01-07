import React, { createContext, useState, useRef, useEffect } from "react";
import {io} from 'socket.io-client'
export const AcountContext = createContext(null);

function Accountprovider({ children }) {
  const [account, setAccount] = useState();
  const [activeUser, setActiveUser] = useState([])
  const[newMessageFlag, setNewMessageFlag] = useState(false)
  const socket = useRef()

  useEffect(() => {
      socket.current = io("ws://localhost:9090");
    }, [])
  return (
    <AcountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        setActiveUser,
        activeUser,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AcountContext.Provider>
  );
}

export default Accountprovider;
