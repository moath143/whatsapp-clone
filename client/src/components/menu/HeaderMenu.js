import React, { useState, useContext } from "react";
import {
  makeStyles,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { GoogleLogout } from "react-google-login";
import { AcountContext } from "./../../context/Accountprovider";
import "./style.css";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  topLeft: {
    top: "65px",
    left: "190px",
  },
  logout: {
    border: "none !important",
    boxShadow: "none !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    color: "#4a4a4a !important",
    justifyContent: "center",
    "& > div": {
      display: "none !important",
    },
  },
});

function HeaderMenu() {
  const classes = useStyles();
  const clientId =
    "1042714159395-qkrnavin67trd9karfuim6npv9jr348o.apps.googleusercontent.com";
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const { setAccount } = useContext(AcountContext);
  const handleClose = () => {
    setOpen(false);
  };
  const openToggleDrawer = () => {
    setOpenDrawer(true);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const onLogoutSuccess = () => {
    alert("you are loged out success");
    console.clear();
    setAccount("");
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizental: "center",
        }}
        className={classes.topLeft}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            openToggleDrawer();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            openToggleDrawer();
          }}
        >
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            cookiePolicy={"single_host_origin"}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.logout}
          />
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default HeaderMenu;
