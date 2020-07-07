import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { sizing } from '@material-ui/system';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import App2 from './App2';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = ((theme) => ({

  heading: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },

  paper1: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(70),
    marginRight: theme.spacing(70),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));

class App extends Component {


  render() {
    const { classes } = this.props
    return (

      <div>
        <div className={classes.heading}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h4" variant="h4">
            Main Page
                             </Typography> </div>
        <div className={classes.paper1}>


          <Button variant="contained" color="transparent" fullWidth={true}><Link to="/login4"> "Admin Login </Link> </Button>

        </div>

        <div className={classes.paper1}>
          <Button variant="contained" color="transparent" fullWidth={true}  ><Link to="/Login3">Student Login</Link></Button>
        </div>

        <div className={classes.paper1}>
          <Button variant="contained" color="transparent" fullWidth={true}  ><Link to="/Login">Gatekeeper Login</Link></Button>
        </div>





      </div>



    )
  };

}
export default withStyles(useStyles)(App);
