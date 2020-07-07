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
import { Redirect, withRouter } from 'react-router';


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
  wrapper:{
    margin:"auto"
  },
  paper: {
    marginTop: theme.spacing(8),
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Login4 extends Component {
  constructor() {
    super();
    this.state = {
      ema: '',
      pass: '',
      st: false
    }
  }

  handleLogin = () => {
      console.log(this.props)
    if (this.state.ema == "AsthaJi" && this.state.pass == "12345") {
      this.props.history.push("/Demo")
    //   alert("Hello")
      this.setState({ st: true })
    } else {
      alert("not loggedin")
    }
  }

  handleChangeFields = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })

  } 
  render() {
    const { classes } = this.props
    return (

      <div className={classes.wrapper}>
        {this.state.pass}
        {/* // CODE EDIT */}
        {this.state.st ? (<div> <Link to ="/Demo"></Link></div>) : (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
    </Typography>


              <div className={classes.form} noValidate>

                <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Admin Name" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields} />


                <TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" id="password" autoComplete="current-password" onChange={this.handleChangeFields} />
                <TextField variant="outlined" margin="normal" required fullWidth id="ans" label="Value" name="ans" autoFocus onChange={this.handleChangeFields} value={this.state.pass} />


                <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                  label="Remember me" />

                <Button onClick={this.handleLogin} fullWidth variant="contained" color="Transparent" className={classes.submit}><Link to ="/Demo">Sign In </Link></Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="" variant="body2">
                      Forgot password?
                      </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>

              </div>
            </div>
          </Container>

        )}
      </div>

    );
  }

}
export default withRouter(withStyles(useStyles)(Login4));