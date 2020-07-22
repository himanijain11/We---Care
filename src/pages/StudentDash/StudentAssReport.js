import React, { Component } from 'react';
import Axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import StudentDash from './StudentDash';

const useStyles = ((theme) => ({
    table: {
        minWidth: 650,
    },
}));

class StudentAssReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabledata: [],
            student_data: [],
            searchDateFrom: null,
            searchDateTo: null,

        }
    }

    async componentDidMount() {
        let tabledata = []
        const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users')
        data.map((data, index) => (
            tabledata = [
                ...tabledata,
                {
                    name1: data.name,
                    name2: data.username,
                    name3: data.email,
                    name4: data.address.street,
                    name5: `2${index}-07-2020`
                }

            ]
        ))
        this.setState({ tabledata, student_data: tabledata })


        // Axios.get('http://localhost:8080/examples/covid19_selfassessmentreport.jsp').then(response => {
        //     this.setState({ tabledata: response.data.responses, student_data: response.data.responses })
        // }).catch(err => {
        //     console.log("Failed");
        // })
    }

    searchHandle = e => {
        if ((this.state.searchDateFrom && this.state.searchDateTo)
            || this.state.searchDateFrom || this.state.searchDateTo) {
            if (this.state.searchDateFrom || this.state.searchDateTo)
                this.setState({ [e.target.name]: e.target.value }, () => tabledata())
            const tabledata = () => {
                const table_Data = this.state.student_data.map(data => {
                    const date_el_curr = data.name5.split('-')
                    const date = new Date(date_el_curr[2], date_el_curr[1] - 1, date_el_curr[0])
                    if (date > new Date(this.state.searchDateFrom) && date < new Date(this.state.searchDateTo))
                        return data
                }).filter(Boolean)
                this.setState({ tabledata: table_Data })
            }
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <StudentDash />
                <div>
                    <center>
                        <input
                            name='searchDateFrom'
                            onChange={this.searchHandle}
                            style={{
                                borderRadius: "5px",
                                fontFamily: "Poppins",
                                marginRight: "20px",
                                border: ".5px solid black",
                                padding: "5px",
                                fontSize: "15px"
                            }}
                            type="date"
                            placeholder="Search Here !" />
                        <input
                            name='searchDateTo'
                            onChange={this.searchHandle}
                            style={{
                                borderRadius: "5px",
                                fontFamily: "Poppins",
                                marginRight: "20px",
                                border: ".5px solid black",
                                padding: "5px",
                                fontSize: "15px"
                            }}
                            type="date"
                            placeholder="Search Here !" />
                        <button onClick={() => this.setState({ tabledata: this.state.student_data })}>
                            Reset
                        </button>
                    </center>
                </div>
                <Grid
                    justify="center"
                >
                    <div className={classes.paper}>
                        <br />
                        <br />
                        <center>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center" >
                                        Suffering from symptoms
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Afflicted with disease
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Travelled anywhere?
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Options
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            fontFamily: "Poppins"
                                        }}
                                        align="center">
                                        Date
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tabledata.map((ag) => (
                                    <TableRow >
                                        <TableCell
                                            style={{ fontFamily: "Poppins" }}
                                            align="center">
                                            {ag.name1}
                                        </TableCell>
                                        <TableCell
                                            style={{ fontFamily: "Poppins" }}
                                            align="center">
                                            {ag.name2}
                                        </TableCell>
                                        <TableCell
                                            style={{ fontFamily: "Poppins" }}
                                            align="center">
                                            {ag.name3}
                                        </TableCell>
                                        <TableCell
                                            style={{ fontFamily: "Poppins" }}
                                            align="center">
                                            {ag.name4}
                                        </TableCell>
                                        <TableCell
                                            style={{ fontFamily: "Poppins" }}
                                            align="center">
                                            {ag.name5}
                                        </TableCell>
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
export default withStyles(useStyles)(StudentAssReport);