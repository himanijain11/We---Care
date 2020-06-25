import React, { useState, Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(8),

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),

  },
  form1: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  form2: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

class Temp extends Component {
  constructor() {
    super();
    this.state = {

      name: '',
      id: '',
      temp: '',
      st: false
    }
  }



  handleLogin = () => {
    if (this.state.name == "Astha" && this.state.temp == "36.7" && this.state.id == "12345") {
      alert("continue")
      this.setState({ st: true })
    } else {
      alert("error...sort it out")
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
      // <div>
      //   <Image
      //     src="e2.jpg"/>
      // </div>
      <div>
        {this.state.name}
        {this.state.id}
        {this.state.temp}
        {this.state.st ? (<div> Welcome</div>) : (
          <Container component="main" maxWidth="xs"><CssBaseline />

            <div className={classes.paper}>
              <Typography component="h1" align="left" variant="h3">Temperature Check</Typography>
              <div className={classes.form} noValidate>
                <TextField variant="outlined" id="outlined-size-small" size="small" label="Student Name" name="name" autoFocus onChange={this.handleChangeFields} />
                <div className={classes.form1} noValidate>
                  <TextField variant="outlined" id="outlined-size-small" size="small" label="Student ID" name="id" autoFocus onChange={this.handleChangeFields} />
                </div>
                <Typography variant="body1" gutterBottom>
                  Recorded temperature is :
                        </Typography>
                <TextField
                  variant="outlined"
                  label="Temperature"
                  id="outlined-size-small"
                  size="small" name="temp"
                  autoFocus
                  onChange={this.handleChangeFields} />
                <div className={classes.form2} noValidate>
                  <Typography variant="body1" gutterBottom>
                    You are allowed to enter.
                  </Typography>
                  <Button
                    onClick={this.handleLogin}
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        )}
      </div>
    );
  }

}
export default withStyles(useStyles)(Temp);
