import React, { Component } from 'react';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AdminDash from '../AdminDash/AdminDash';
const useStyles = ((theme) => ({


    table: {
        minWidth: 650,
    },
}));

class StudentProAdmin extends Component {
    constructor() {
        super()
        this.state = {
            tabledata: []
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:8080/examples/covid19_profiledisplay.jsp').then(response=>{
          this.setState({tabledata: response.data.responses})  
        }).catch(err => {
            console.log("Failed");
        })
  
    }

   


    render() {
        const { classes } = this.props


        return (
          <div>
              <AdminDash/>
              <Grid style={{marginTop:"60px"}}>
                  <div className={classes.paper}>
                      <br />
                      <br />
                      <center>

                          <TableHead>
                              <TableRow>
                               
                                  <TableCell align="center">Student ID</TableCell>
                                  <TableCell align="center">Student Name</TableCell>
                                  <TableCell align="center">Father Name</TableCell>
                                  <TableCell align="center">Class</TableCell>
                                  <TableCell align="center">Section</TableCell>
                                  <TableCell align="center">Contactno</TableCell>
                                  <TableCell align="center">Gender</TableCell>
                                  <TableCell align="center">Transportation</TableCell>
                                  
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {this.state.tabledata.map((ag) => (
                                  <TableRow >
                                      
                                      <TableCell align="center">{ag.StudentID}</TableCell>
                                      <TableCell align="center">{ag.StudentName}</TableCell>
                                      <TableCell align="center">{ag.FathersName}</TableCell>
                                      <TableCell align="center">{ag.Class}</TableCell>
                                      <TableCell align="center">{ag.Section}</TableCell>
                                      <TableCell align="center">{ag.Contactno}</TableCell>
                                      <TableCell align="center">{ag.Gender}</TableCell>
                                      <TableCell align="center">{ag.Transportation}</TableCell>
                                      
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
export default withStyles(useStyles)(StudentProAdmin);