import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core';

class StudentProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Student Profile
      </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>

            <TextField
              required
              id="address1"
              name="address1"
              label="Student Unique Id"
              fullWidth
              autoComplete="Student Id"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="father's Name"
              name="father's Name"
              label="father's Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Class"
              name="Class"
              label="Class"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Section"
              name="Section"
              label="Section"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Gender"
              name="Gender"
              label="Gender"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>



        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Age"
              name="Age"
              label="Age"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Mobile"
              name="Mobile"
              label="Mobile"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

        </Grid>



        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Transportation"
              name="Transportation"
              label="Transportation"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles() (StudentProfile)