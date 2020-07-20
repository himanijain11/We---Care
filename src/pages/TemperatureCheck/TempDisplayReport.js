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
    let tabledata = []

    new Array(10).fill(0).map(d => {
      tabledata = [
        ...tabledata,
        {
          StudentID: "Data 1",
          StudentName: "Data 2",
          FathersName: "Data 3",
          Class: "Data 4",
          Section: "Data 4",
          Temperature: "Data 4",
        }
      ]
    })

    this.setState({ kalu: tabledata })
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
        <div style={{ marginTop: "30px" }} className={classes.paper}>
          <br />
          <br />
          <center>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"

                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins"
                  }}
                >
                  Student ID
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins"
                  }}
                >
                  Student Name
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins"
                  }}
                >
                  Class
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins"
                  }}
                >
                  Section
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Poppins"
                  }}
                >
                  Temperature
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.kalu.map((item) => (
                <TableRow >
                  <TableCell
                    style={{
                      fontFamily: "Poppins"
                    }}
                    align="center">
                    {item.StudentID}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins"
                    }}
                    align="center">
                    {item.StudentName}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins"
                    }}
                    align="center">
                    {item.Class}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins"
                    }}
                    align="center">
                    {item.Section}
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "Poppins"
                    }}
                    align="center">
                    {item.Temperature}
                  </TableCell>
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