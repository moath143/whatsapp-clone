import React from "react";
import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Profile from './Profile'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#00bfa5',
        width: '100%',
        height: 119,
        color: '#fff',
        '& > *': {
            fontWeight: 500,
        }
    },
    arrowIcon: {
        flex: .2,
        padding: '20px 15px'
    },
    typoTitle: {
        flex: .8
    },
    component: {
        backgroundColor: '#ededed',
        height: '100%'
    }
});

function InfoDrawer({ open, setOpen }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box className={classes.header}>
        <ArrowBackIcon className={classes.arrowIcon} onClick={handleClose} />
        <Typography className={classes.typoTitle}>Profile</Typography>
          </Box>
          <Box className={classes.component}>
              <Profile />
          </Box>
    </Drawer>
  );
}

export default InfoDrawer;
