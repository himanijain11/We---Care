import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{BrowserRouter as Router,
    Switch,Route} from "react-router-dom";
    // import Login from './Login';
    // import About from './About';
    // import Home from '/Home'; 
    import HomeIcon from "@material-ui/icons/Home";
    import Axios from 'axios';
  
const useStyles = ((theme) => ({
  root: {
    //marginTop: 0,
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginLeft: 100,
    padding: 5,
  },
  head: {
    //height:60,
    //backgroundColor: "#004F9D",
    //  backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

class Home1 extends Component 
{
  constructor()
    {
        super();
        this.state={
          kalu:[]
        };
    }
    componentDidMount(){
        Axios.get('http://localhost:8080/examples/displaycheck.jsp').then(response=>{
          this.setState({kalu: response.data.responses})  
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      
                {    this.state.kalu.map((ag,key) => 
                    <div key={key+(ag.Studentname)}>
                        {key},  {ag.Studentname},    {ag.StudentID},  
                    </div>
                    )
                }
        

    </div>
  );
}
}
export default withStyles(useStyles)(Home1);