import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const useStyles = ((theme) => ({
    
      paper: {
      marginTop: theme.spacing(8),
      
    }, 
     
      
      form: {
      width: '100%',
      marginTop: theme.spacing(3),
     
    },
    form1: {
      width: '100%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    form2: {
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
     
    },
      submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class TemperatureCheck extends Component
  {
  constructor()
{
    super();
    this.state={
        t1:'',
        t2:'',
        t3:'',
        message:"" 
    }
} 
fun(e){
  this.setState({
 [e.target.name]:e.target.value     
  })
}
sendData(ev){
  const t1=this.state.t1
  const t2=this.state.t2
  const t3=this.state.t3
  
  const data={
    t1,t2,t3
       }
Axios.get('http://localhost:8080/examples/check.jsp',{params:data}).then(response=>{
console.log(response);
this.setState({
message:response.data.response
})
}).catch(err=>{
console.log("Failed");
})
}

render()
    {
        const {classes} = this.props
        return (
                <div>
                 
                 
                   <Container component="main" maxWidth="xs"><CssBaseline />
                 
             <div className={classes.paper}>
                       <Typography component="h5" align="left" variant="h5">Temperature Check</Typography>
                      
                       <div className={classes.form}>
                       <TextField variant="outlined" label="Student name" id="outlined-size-small"  size="small" name="t1"  onChange={this.fun.bind(this)} />
                       </div>
                       <div className={classes.form}>
                       <TextField variant="outlined" label="Student ID" id="outlined-size-small"  size="small" name="t2"  onChange={this.fun.bind(this)} />  
                      </div>
                       <div className={classes.form1}>
                       <Typography variant="body1" gutterBottom>
                          Recorded temperature is :
                        </Typography> </div>
                        </div>
                        <TextField variant="outlined" label="Temperature" id="outlined-size-small"  size="small" name="t3" autoFocus onChange={this.fun.bind(this)} />
                        <div>
                        <Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Submit </Button>
                        </div>
{this.state.message}       
                       
               
               
                   </Container>
               
                </div>              
               );
       }

       }
export default withStyles(useStyles)( TemperatureCheck);
