import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function TemperatureStatus() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Temperature Status
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="DEGREE" 
          label="Temperature Degree" 
          fullWidth autoComplete="DEGREE" 
          />
        </Grid>
        
        
       </Grid>
    </React.Fragment>
  );
}
