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

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      checked: {
        stu: false,
        gat: false,
        adm: false
      }
    }
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'gat':
        this.setState({
          checked: {
            stu: false,
            gat: true,
            adm: false

          }
        })
        break
      case 'adm':
        this.setState({
          checked: {
            stu: false,
            gat: false,
            adm: true

          }
        })
        break
      case 'stu':
        this.setState({
          checked: {
            stu: true,
            gat: false,
            adm: false

          }
        })
        break
      default:
        break
    }
  }

  handleDetailChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = () => {
    if (this.state.checked.adm) {
      if (this.state.username === 'Himani' && this.state.password === '123')
        this.props.history.push('/Demo')
      else
        alert('Wrong Details')
    }
    else if (this.state.checked.stu) {
      if (this.state.username === 'Himani' && this.state.password === '123')
        this.props.history.push('/StudentDash')
      else
        alert('Wrong Details')
    }
    else {
      if (this.state.username === 'Himani' && this.state.password === '123')
        this.props.history.push('#')
      else
        alert('Wrong Details')
    }
  }


  render() {
    console.log(this.state)
    const { classes } = this.props
    return (


      <div>
        <div className={classes.heading}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h4" variant="h4">
            Main Page
          </Typography>
        </div>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Student Login
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="address1"
                name="username"
                label="Username"
                fullWidth
                autoComplete="Student Id"
                onChange={this.handleDetailChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Password"
                name="password"
                label="password"
                fullWidth
                autoComplete="given-name"
                onChange={this.handleDetailChange}
              />
            </Grid>
          </Grid>
        </React.Fragment>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked.adm}
                onChange={this.handleChange}
                name="adm"
                color="primary"
              />
            }
            label="Admin"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked.stu}
                onChange={this.handleChange}
                name="stu"
                color="primary"
              />
            }
            label="Student"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checked.gat}
                onChange={this.handleChange}
                name="gat"
                color="primary"
              />
            }
            label="Gatekeeper"
          />
        </Box>

        <div className={classes.paper1}>
          <Button onClick={this.handleLogin} variant="contained" color="transparent" fullWidth={true}> Login </Button>
        </div>
      </div>
    )
  };
}
export default withStyles(useStyles)(MainPage);
