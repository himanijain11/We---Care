import React, { Component } from 'react';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const useStyles = ((theme) => ({


    table: {
        minWidth: 650,
    },
}));

class StudentProfileDB extends Component {
    constructor() {
        super()
        this.state = {
            tabledata: []
        }
    }
    handleShow = () => {
        Axios.get('http://localhost:8080/examples/Studentprofile.jsp').then((response) => {
            this.setState({
                tabledata: response.data.responses
            })
        })
    }


    render() {
        const { classes } = this.props


        return (
          <div>
              <Grid>
                  <div className={classes.paper}>
                      <center><Button onClick={this.handleShow} variant="contained">Show Data</Button></center>
                      <br />
                      <br />
                      <center>

                          <TableHead>
                              <TableRow>
                                  <TableCell>Student Name</TableCell>
                                  <TableCell align="right">Student ID</TableCell>
                                  <TableCell align="right">Father Name</TableCell>
                                  <TableCell align="right">Class</TableCell>
                                  <TableCell align="right">Section</TableCell>
                                  <TableCell align="right">Contact</TableCell>
                                  <TableCell align="right">Gender</TableCell>
                                  <TableCell align="right">Transportation</TableCell>
                                  
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {this.state.tabledata.map((ag) => (
                                  <TableRow >
                                      
                                      <TableCell align="right">{ag.StudentID}</TableCell>
                                      <TableCell align="right">{ag.StudentName}</TableCell>
                                      <TableCell align="right">{ag.FatherName}</TableCell>
                                      <TableCell align="right">{ag.Class}</TableCell>
                                      <TableCell align="right">{ag.Section}</TableCell>
                                      <TableCell align="right">{ag.ContactNumber}</TableCell>
                                      <TableCell align="right">{ag.Gender}</TableCell>
                                      <TableCell align="right">{ag.Transportation}</TableCell>
                                      
                                  </TableRow>
                              ))}

                          </TableBody>

                      </center>
                  </div>
              </Grid>
          </div>
      );
  }
}
export default withStyles(useStyles)(StudentProfileDB);