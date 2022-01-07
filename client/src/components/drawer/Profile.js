import React, { useContext } from "react";
import { Box, Avatar, makeStyles, Typography } from "@material-ui/core";
import { AcountContext } from "../../context/Accountprovider";

const useStyles = makeStyles({
  imgAvatar: {
    width: "170px",
    height: "170px",
    margin: "20px 0",
  },
  centerAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  accountName: {
    background: "#fff",
    padding: "20px 15px",
    "& > p:first-of-type": {
      color: "#00bfa5",
      fontWeight: 500,
      fontSize: 17,
    },
    "& > p:last-of-type": {
      color: "#4a4a4a",
      textTransform: "capitalize",
      fontWeight: 400,
    },
  },
  description: {
    padding: "20px 15px",
    textTransform: "capitalize",
    "& > p": {
      fontSize: "14px",
        lineHeight: "21px",
      color: 'rgba(0, 0, 0, 0.45)'
    },
  },
});

function Profile() {
  const classes = useStyles();
  const { account } = useContext(AcountContext);
  return (
    <>
      <Box className={classes.centerAvatar}>
        <Avatar
          src={account.imageUrl}
          alt="profile"
          className={classes.imgAvatar}
        />
      </Box>
      <Box className={classes.accountName}>
        <Typography>Your name</Typography>
        <Typography> {account.name} </Typography>
      </Box>
      <Box className={classes.description}>
        <Typography>
          this is not your username or pin. This name will be visible to your
          whatsapp contacts
        </Typography>
      </Box>
      <Box className={classes.accountName}>
        <Typography>About</Typography>
        <Typography>Enjoy on your whatsapp!!</Typography>
      </Box>
    </>
  );
}

export default Profile;
