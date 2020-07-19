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

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box } from '@material-ui/core';
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
    margin: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
  form: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(70),
    marginRight: theme.spacing(70),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },


}));

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',

    }
  }
  handleDetailChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = () => {
    const data = {
      'username': this.state.username,
      'password': this.state.password
    }
    const role = Axios.get('http://localhost:8080/examples/login.jsp', { params: data }).then(response => {
      console.log(response)
      if (response.data.role === 'Nothing') {
        alert('Wrong Password or Id')
      } else {
        localStorage.setItem('user', this.state.username)
        localStorage.setItem('currentUser', true)
        if (response.data.role === 'admin')
          this.props.history.push('/demo')
        else if (response.data.role === 'Student')
          this.props.history.push('/StudentDash')
        else
          this.props.history.push('/GatekeeperDash')

      }

    }).catch(err => {
      console.log("Failed");

    })
  }
  render() {
    localStorage.setItem('currentUser', false)
    const { classes } = this.props
    return (
      <div>
        <div className={classes.heading}>
          <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
          <Typography component="h4" variant="h4">
            Login
          </Typography>
          <div className={classes.form}>
            <TextField
              required
              id="address1"
              name="username"
              label="Unique ID"
              size="medium"
              onChange={this.handleDetailChange}
            />

          </div>

          <div className={classes.form}>
            <TextField
              required
              id="Password"
              name="password"
              label="password"
              size="medium"
              onChange={this.handleDetailChange}
            />


          </div>



          <div className={classes.paper1}>
            <Button onClick={this.handleLogin} variant="contained" color="transparent" fullWidth={true}> Login </Button>
          </div>
        </div>
      </div>
    )
  };
}
export default withStyles(useStyles)(MainPage);
