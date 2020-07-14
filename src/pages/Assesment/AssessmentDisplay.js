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

class AssessmentDisplay extends Component {
    constructor() {
        super()
        this.state = {
            tabledata: []
        }
    }
    handleShow = () => {
        Axios.get('http://localhost:8080/examples/assessmentdisplay.jsp').then((response) => {
            console.log(response)
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
                                    
                                    <TableCell align="center">Fever Type</TableCell>
                                    <TableCell align="center">Fever Type 2</TableCell>
                                    <TableCell align="center">"Have you travelled anywhere internationally in the last 28-45 days</TableCell>
                                    <TableCell align="center">Which of these following</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tabledata.map((ag) => (
                                    <TableRow >
                                        
                                        <TableCell align="center">{ag.name1}</TableCell>
                                        <TableCell align="center">{ag.name2}</TableCell>
                                        <TableCell align="center">{ag.name3}</TableCell>
                                        <TableCell align="center">{ag.name4}</TableCell>
                                       
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
export default withStyles(useStyles)(AssessmentDisplay);