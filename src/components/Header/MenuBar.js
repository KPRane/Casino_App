import React from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button, Menu, MenuItem } from "@material-ui/core";
import LogoutIcon from '@mui/icons-material/Logout';
import Auth from "../Auth/Auth";
import { appStore } from "../../store/AppStore";

import Logo from "../../logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
  userData: {
    display: "inline-flex",
    alignItems: "center"
  },
  score: {
    marginRight: theme.spacing(2)
  },
  userButton: {
    flex: 1,
    borderRadius: 0
  },
  userName: {
    marginRight: theme.spacing(1)
  },
  userAvatar: {
    width: 120,
    height:80
  },
  menuItem:{
    color:'white'
  }
}));

function MenuBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const { username, score, login, logout } = appStore;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    window.location.reload();
    handleMenuClose();
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'black' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           CASINO 
          </Typography>
          {!username ? (
            <Auth login={login} />
          ) : (
            <div className={classes.userData}>
              <Typography className={classes.score}>Score: ${score}</Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                className={classes.userButton}
              >
                <Typography className={classes.userName}>{username}</Typography>
                <img
                  alt="user-avatar"
                  src='/1.jpg'
                  className={classes.userAvatar}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={menuOpen}
                onClose={handleMenuClose}
              >
              </Menu>
                <LogoutIcon variant="contained" color="white"  onClick={handleLogOut}></LogoutIcon >
            </div>
          )}
        </Toolbar>
      </AppBar><br/><br/><br/>
    </div>
  );
}

export default observer(MenuBar);
