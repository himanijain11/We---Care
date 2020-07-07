// import React from 'react';
import React, { useState, Component } from 'react';
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import TypoGraphy from '@material-ui/core/Typography'
export class Excel extends React.Component {
    state = {
        rows: "",
        cols: ""

    }
    fileHandler = (event) => {
        let fileObj = event.target.files[0];
        // just pass the the filObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });

    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                 <TypoGraphy variant="h6" style={{ Textalign: "center" }} > <center><h3>MESSAGE EXCEL SHEET OF  STUDENTS</h3></center> </TypoGraphy>   
                   <input type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
                    <div>
                        {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="Excel
                        Table2007" tableHeaderRowClass="heading" />}
                    </div>
                </header>
            </div>

        );
    }
}

export default Excel;