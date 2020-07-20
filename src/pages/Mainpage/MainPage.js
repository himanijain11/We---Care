import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import '../Mainpage/Mainpage.css'
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
      <div style={{
        textAlign: "center",
        display: "flex",
        backgroundImage: "linear-gradient(180deg, #0c0c0c 50%, #f1f1f1 50%)",
        height: "100vh",

      }}>
        <div
          className="wrapper"
          style={{
            background: "white",
            boxShadow: "30px 30px 20px 20px rgba(0,0,0,0.3)",
            borderRadius: "20px",
            padding: window.innerWidth > 600 ? "50px 200px" : "50px",
            margin: "auto",
          }}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#00e676"
            }}
            variant="h1">
            LoGiN
            </Typography>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              style={{
                marginBottom: "20px",
                marginTop: "20px",
              }}
              id="address1"
              name="username"
              label="Username"
              size="medium"
              onChange={this.handleDetailChange}
            />

            <TextField
              required
              id="Password"
              name="password"
              label="Password"
              size="medium"
              onChange={this.handleDetailChange}
            />
          </div>

          <Button
            style={{
              marginTop: "50px",
              width: "150px"
            }}
            onClick={this.handleLogin}

            variant="outlined"
            color="primary"
            fullWidth={true}>
            Login
          </Button>

        </div>
      </div>
    )
  };
}
export default (MainPage);
