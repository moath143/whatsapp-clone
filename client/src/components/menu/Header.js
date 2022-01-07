import React, { useContext, useState } from "react";
import { AcountContext } from "../../context/Accountprovider";
import { makeStyles, Box, Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HeaderMenu from "./HeaderMenu";
import Drawer from '../drawer/InfoDrawer'

const useStyles = makeStyles({
  header: {
    height: 88,
    background: "#ededed",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    padding: "10px 16px",
  },
  icon: {
    padding: "0 10px",
  },
});



function Header() {
  const classes = useStyles();
    const { account } = useContext(AcountContext);
    const[open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen(true)
    }
  return (
    <>
      <Box className={classes.header}>
        <Box className={classes.avatar}>
          <Avatar
            onClick={() => {
              toggleDrawer();
            }}
            alt={account.name}
            src={account.imageUrl}
          />
        </Box>
        <Box className={classes.avatar}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
