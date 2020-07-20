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
            search_value: '',
            students_data: null,
            tabledata: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/examples/covid19_profiledisplay.jsp').then(response => {
            this.setState({
                tabledata: response.data.responses,
                students_data: response.data.responses
            })
        }).catch(err => {
            console.log("Failed");
        })
    }


    searchHandle = (e) => {
        let net_data = []
        this.state.students_data.map(data => {
            if (data.StudentName.substring(0, e.target.value.length).toLowerCase() ===
                e.target.value.toLowerCase() ||
                data.StudentID.substring(0, e.target.value.length1) === e.target.value
            ) {
                net_data = [
                    ...net_data,
                    data
                ]
            }
        })
        this.setState({ tabledata: net_data })
    }

    render() {
        console.log(this.state.tabledata)
        const { classes } = this.props
        return (
            <div>
                <AdminDash />
                <Grid style={{ marginTop: "60px" }}>

                    <div className={classes.paper}>
                        <br />
                        <br />
                        <div>
                            <center>
                                <input
                                    onChange={this.searchHandle}
                                    style={{
                                        borderRadius: "5px",
                                        fontFamily: "Poppins",
                                        marginRight: "20px",
                                        border: ".5px solid black",
                                        padding: "5px",
                                        fontSize: "15px"
                                    }}
                                    type="text"
                                    placeholder="Search Here !" />
                            </center>
                        </div>
                        <center>

                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Student ID
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Student Name
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Father Name
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Class
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Section
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Contact No.
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Gender
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Transportation
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tabledata.map(ag => (
                                    <TableRow>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.StudentID}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.StudentName}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.FathersName}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.Class}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.Section}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.Contactno}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.Gender}</TableCell>
                                        <TableCell style={{ fontFamily: "Poppins" }} align="center">{ag.Transportation}</TableCell>
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