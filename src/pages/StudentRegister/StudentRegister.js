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
import AdminDash from '../AdminDash/AdminDash';
import Alert from '@material-ui/lab/Alert';
import { Select, MenuItem, MenuList, Snackbar } from '@material-ui/core';
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
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
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
      t7: "Gender",
      t8: "",
      message: "",
      showAlert: false,
      showAlertError: false
    }
  }
  fun = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sendData = () => {
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
    Axios.get('http://localhost:8080/examples/covid19_register.jsp', { params: data }).then(response => {
      console.log(response);
      this.setState({
        message: response.data.response,
        showAlert: true
      })

    }).catch(err => {
      this.setState({ showAlertError: true })
      console.log("Failed");
    })
  }

  render() {
    console.log(this.state)
    const { classes } = this.props
    return (
      <div>
        <AdminDash />

        <div style={{
          marginTop:"50px",
          background: "#f5f5f5",
          padding: "50px 100px 25px",
        }} className={classes.paper}>

          <div
            style={{
              background: "black",
              padding: "20px 50px",
              verticalAlign: "middle",
              marginBottom: "50px",
            }}
          >
            <Typography
              style={{
                fontWeight: "400",
                color: "#121212",
                opacity: "1",
                color: "white",

                fontFamily: "Poppins"
              }}
              component="h1"
              variant="h2">
              Register
          </Typography>
          </div>

          <div
            noValidate>
            <Grid
              justify="center"
              // alignItems="center"
              container
            >
              <Grid
                container
                justify="center"
                item
                md={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Student ID" name="t1" onChange={this.fun.bind(this)} />

                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Student name"
                  name="t2"
                  onChange={this.fun.bind(this)} />

                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Fathers name"
                  name="t3"
                  onChange={this.fun.bind(this)} />

                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Class"
                  name="t4"
                  onChange={this.fun.bind(this)} />
              </Grid>
              <Grid justify="center" container item md={4}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Section"
                  name="t5"
                  onChange={this.fun.bind(this)} />

                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Contact no"
                  name="t6"
                  onChange={this.fun.bind(this)} />

                <div
                  style={{
                    padding: "24px"
                  }}
                >
                  <Select
                    style={{ width: "245px" }}
                    name="t7"
                    defaultValue="Gender"
                    value={this.state.t7}
                    onChange={(e) => this.fun(e)}>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </div>

                <TextField
                  variant="outlined"
                  margin="normal"
                  id="standard-size-normal"
                  label="Transportation"
                  name="t8"
                  onChange={this.fun.bind(this)} />
              </Grid>
              <Grid
                justify="center"
                container
                item md={12}
                xs={12}>
                <Button
                  style={{
                    padding: "15px 25px"
                  }}
                  onClick={this.sendData.bind(this)}
                  size="small"
                  variant="outlined"
                  color="secondary"
                  className={classes.submit}>
                  Submit
            </Button>
              </Grid>
            </Grid>

          </div>
          <Snackbar open={this.state.showAlert}  autoHideDuration={5000}>
            <Alert onClose={() => this.setState({ showAlert: false })} severity="success">
              Student is Registered
            </Alert>
          </Snackbar>
          <Snackbar open={this.state.showAlertError} autoHideDuration={5000}>
            <Alert onClose={() => this.setState({ showAlertError: false })} severity="error">
              Student is not registered
            </Alert>
          </Snackbar>
        </div>
      </div>

    );
  }

}
export default withStyles(useStyles)(App);
