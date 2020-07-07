import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core';

export default function StudentProfile() {
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
    </React.Fragment>
  );
}
