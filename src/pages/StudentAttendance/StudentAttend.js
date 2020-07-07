import React, { Component } from 'react';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, TableCell, TableRow, TableHead, Table, Paper, TableContainer, TableBody } from '@material-ui/core';

const useStyles = {
  table: {
    minWidth: 650,
  },
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('23-july-10', 'Fever' ,'23%',),
  createData('12-june-10', 'Cold', '09%', ),
  createData('02-jan-10', 'Healthy', '90%', ),
  createData('21-feb-10', 'Healthy', '99%', ),
  createData('23-sep-10', 'Healthy', '80%', ),
];



class StudentAttend extends Component {
  render() {
    const {classes} = this.props
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Symptoms</TableCell>
              <TableCell align="right">Attendence stats</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    );
  }
}

export default withStyles(useStyles)(StudentAttend)