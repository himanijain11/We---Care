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

class AssessmentDisplay extends Component {
    constructor() {
        super()
        this.state = {
            tabledata: []
        }
    }



    componentDidMount() {
        Axios.get('http://localhost:8080/examples/covid19_selfassessmentreport.jsp').then(response => {
            this.setState({ tabledata: response.data.responses })
        }).catch(err => {
            console.log("Failed");
        })

    }


    render() {
        const { classes } = this.props


        return (
            <div>
                <AdminDash />
                
                <Grid style={{marginTop:"60px" , marginLeft:"220px"}}>
                    <div className={classes.paper}>
                        <br />
                        <br />
                        <center>
                            <TableHead>
                                <TableRow>

                                    <TableCell align="center" >Suffering from symptoms</TableCell>
                                    <TableCell align="center">Afflicted with disease</TableCell>
                                    <TableCell align="center">Travelled anywhere internationally in the last 28-45 days</TableCell>
                                    <TableCell align="center">Options</TableCell>

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