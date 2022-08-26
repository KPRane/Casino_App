import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    
  },
  grow: {
    flexGrow: 1
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed"className={classes.appBar}  style={{ background: 'black' }}>
      <Toolbar>
        <Typography variant="body2" >
          Copyright © Casino@2022. Kamesh Rane
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
