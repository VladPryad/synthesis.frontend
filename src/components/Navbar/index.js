import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo_c.png'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(150),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <CssBaseline />
      <Toolbar color="transparent">
      <img className="rotate90" style={{margin: "10px"}} height={'64px'} alt="Home" src={logo}/>
          <div className={classes.navlinks}>
            <Link to="/particle" className={classes.link}>
              Enter App
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
