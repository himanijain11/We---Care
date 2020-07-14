import React, { Component } from 'react';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const useStyles = ((theme) => ({

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(20)
  },
    table: {
        minWidth: 650,
    },
}));

class StudentAttend extends Component {
    constructor() {
        super()
       
        this.state = {
            t1:'',
            t2:'',
            
            tabledata: []
        }
    }
    fun(e){
        this.setState({
       [e.target.name]:e.target.value     
        })
      }
      sendData(ev){
        const t1=this.state.t1
        const t2=this.state.t2
        
        
        const data={
          t1,t2
             }}







    handleShow = () => {
        Axios.get('http://localhost:8080/examples/attendance.jsp').then((response) => {
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
                     <div className={classes.form}>
                       <TextField variant="outlined" label="class" id="outlined-size-small"  size="small" name="t1"  onChange={this.fun.bind(this)} />
                       </div>
                       <div className={classes.form}>
                       <TextField variant="outlined" label="section" id="outlined-size-small"  size="small" name="t2"  onChange={this.fun.bind(this)} />  
                      </div>









             
                  <div className={classes.paper}>
                  <center><Button onClick={this.handleShow} variant="contained">Show Data</Button></center>
                      <br />
                      <br />
                      <center>

                          <TableHead>
                              <TableRow>
                                 
                                  <TableCell align="right">Student ID</TableCell>
                                  <TableCell>Student Name</TableCell>
                                  <TableCell align="right">Fathers Name</TableCell>
                                  <TableCell align="right">Class</TableCell>
                                  <TableCell align="right">Section</TableCell>
                                  <TableCell align="right">Contact</TableCell>
                                  <TableCell align="right">Gender</TableCell>
                                  <TableCell align="right">Transportation</TableCell>
                                  <TableCell align="right">Temperature</TableCell>
                                  
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {this.state.tabledata.map((ag) => (
                                  <TableRow >
                                      
                                      <TableCell align="right">{ag.StudentID}</TableCell>
                                      <TableCell align="right">{ag.StudentName}</TableCell>
                                      <TableCell align="right">{ag.FathersName}</TableCell>
                                      <TableCell align="right">{ag.Class}</TableCell>
                                      <TableCell align="right">{ag.Section}</TableCell>
                                      <TableCell align="right">{ag.ContactNumber}</TableCell>
                                      <TableCell align="right">{ag.Gender}</TableCell>
                                      <TableCell align="right">{ag.Transportation}</TableCell>
                                      <TableCell align="right">{ag.Temperature}</TableCell>
                                      
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
export default withStyles(useStyles)(StudentAttend);