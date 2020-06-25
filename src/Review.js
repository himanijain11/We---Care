
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Student ID= AEC21CS11', desc: 'CLASS 9th Section- A', price: 'NOT ALLOWED' },
  { name: 'Student ID= AEC21CS12', desc: 'CLASS 7th Section- D', price: 'NOT ALLOWED' },
  { name: 'Student ID= AEC21CS13', desc: 'CLASS 4th Section- B', price: 'NOT ALLOWED' },
  { name: 'Student ID= AEC21CS14', desc: 'CLASS 8th Section- F', price: 'NOT ALLOWED' },
  { name: 'Student ID= AEC21CS15', desc: 'CLASS 5th Section- E', price: 'NOT ALLOWED' },
];
const addresses = [];
const payments = [
 ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Report
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            5 CASES
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            PRESENT STUDENTS
          </Typography>
          <Typography gutterBottom>120000</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            ABSENT STUDENTS
          </Typography>
          <Typography gutterBottom>5</Typography>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}