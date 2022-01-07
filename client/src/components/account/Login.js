import React, { useContext } from "react";
import {AcountContext} from "../../context/Accountprovider";
import { GoogleLogin } from "react-google-login";
import { clientId } from '../constant/data'
import { addUser } from "../../service/api.js";
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    borderRaduis: "0",
    boxShadow: "none",
    maxHeight: "100%",
        maxWidth: "100%",
    overflow: 'hidden'
  },
};
const useStyles = makeStyles({
  component: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrCode: {
    height: 264,
    width: 264,
    padding: "50px 30px 0 50px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    fontFamily:
      "segoe UI, Helvetica Neve, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans,sans-serif",
    fontWeight: 300,
    color: "#525252",
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "4a4a4a",
    },
  },
});
function Login({ classes }) {
  const classname = useStyles();
    const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
    // const clientId = '1042714159395-qkrnavin67trd9karfuim6npv9jr348o.apps.googleusercontent.com'
    const { account, setAccount } = useContext(AcountContext);

    const onLoginSuccess = async (res) => {
      setAccount(res.profileObj);
      await addUser(res.profileObj)
    }

    const onLoginFailure = () => {
        console.log('login failure');
    }
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>
            To use WhatsApp on your computer:
          </Typography>
          <List className={classname.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or settings and select Linked Device
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to the capture the code
            </ListItem>
          </List>
        </Box>
        <Box style={{position: 'relative'}}>
          <img className={classname.qrCode} src={qrurl} alt="qr" />
          <Box style={{position: 'absolute', left: '50%', top: '50%'}}>
            <GoogleLogin
              clientId={clientId}
              cookiePolicy={"single_host_origin"}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default withStyles(style)(Login);
