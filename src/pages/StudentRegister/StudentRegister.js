import React, { useState, Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

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
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),

    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class App extends Component {
  constructor() {
    super();
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",

      message: ""
    }
  }
  fun(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sendData(ev) {
    const t1 = this.state.t1
    const t2 = this.state.t2
    const t3 = this.state.t3
    const t4 = this.state.t4
    const t5 = this.state.t5
    const t6 = this.state.t6
    const t7 = this.state.t7
    const t8 = this.state.t8


    const data = {
      t1, t2, t3, t4, t5, t6, t7, t8
    }
    Axios.get('http://localhost:8080/examples/wecare_register.jsp', { params: data }).then(response => {
      console.log(response);
      this.setState({
        message: response.data.response
      })
    }).catch(err => {
      console.log("Failed");
    })
  }

  render() {
    const { classes } = this.props
    return (

      <div>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
    </Typography>


          <div className={classes.form} noValidate>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Student ID" name="t1" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Student name" name="t2" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Fathers name" name="t3" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Class" name="t4" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Section" name="t5" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Contact no" name="t6" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Gender" name="t7" onChange={this.fun.bind(this)} />
            </div>
            <div>
              <TextField variant="outlined" margin="normal" id="standard-size-normal" label="Transportation" name="t8" onChange={this.fun.bind(this)} />
            </div>

            <Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Submit </Button>

            {this.state.message}

          </div>
        </div>



      </div>

    );
  }

}
export default withStyles(useStyles)(App);
