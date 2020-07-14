import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AdminDash from '../AdminDash/AdminDash';

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: 5,
  },
  head: {
    color: theme.palette.common.white,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

class TempDisplayReport extends Component {
  constructor() {
    super();
    this.state = {
      kalu: []
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:8080/examples/covid19_temperaturecheckreport.jsp').then(response => {
      this.setState({ kalu: response.data.responses })
    }).catch(err => {
      console.log("Failed");
    })

  }


  render() {
    const { classes } = this.props
    return (
      <div>
        <AdminDash />
        <div style={{marginTop:"30px"}} className={classes.paper}>
          <br />
          <br />
          <center>
            <TableHead>
              <TableRow>
                <TableCell align="center">Student ID</TableCell>
                <TableCell align="center">Student Name</TableCell>
                <TableCell align="center">Class</TableCell>
                <TableCell align="center">Section</TableCell>
                <TableCell align="center">Temperature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.kalu.map((item) => (
                <TableRow >
                  <TableCell align="center">{item.StudentID}</TableCell>
                  <TableCell align="center">{item.StudentName}</TableCell>
                  <TableCell align="center">{item.Class}</TableCell>
                  <TableCell align="center">{item.Section}</TableCell>
                  <TableCell align="center">{item.Temperature}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </center>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(TempDisplayReport);