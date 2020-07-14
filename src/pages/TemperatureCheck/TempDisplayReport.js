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

class TempDisplayReport extends Component {
    constructor() {
        super()
        this.state = {
            tabledata: []
        }
    }
    handleShow = () => {
        Axios.get('http://localhost:8080/examples/tempdisplay.jsp').then((response) => {
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
                                    <TableCell align="right">Temp</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tabledata.map((ag) => (
                                    <TableRow >
                                        
                                        <TableCell align="right">{ag.name}</TableCell>
                                        <TableCell align="right">{ag.id}</TableCell>
                                        <TableCell align="right">{ag.fathername}</TableCell>
                                        <TableCell align="right">{ag.class}</TableCell>
                                        <TableCell align="right">{ag.section}</TableCell>
                                        <TableCell align="right">{ag.contactnumber}</TableCell>
                                        <TableCell align="right">{ag.gender}</TableCell>
                                        <TableCell align="right">{ag.transportation}</TableCell>
                                        <TableCell align="right">{ag.temp}</TableCell>
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
export default withStyles(useStyles)(TempDisplayReport);