
import React, { usestate, Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Divider,
    CssBaseline,
    Hidden,
    IconButton,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appbar from '../../Components/Appbar/Appbar'
import Excel from '../Excel/Excel';
import clsx from 'clsx';
import Excel2 from '../Excel/Excel2';
import App from '../StudentRegister/StudentRegister';
import Assessment from '../Assesment/Assessment';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles, } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ReportIcon from '@material-ui/icons/Report';
const drawerWidth = 240;

const useStyles = ((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

class AdminDash extends Component {
    constructor() {
        super();
        this.state = {
            open: true
        };
    }
    handleDrawerOpen = () => {
        this.setState({ open: true })
    };
    handleDrawerClose = () => {
        this.setState({ open: false })
    };
    render() {
        const { classes } = this.props;
        // [open, setOpen] = state,setState(true);
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (

            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" color="secondary" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Admin Dashboard
                        </Typography>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            {"Hello! " + localStorage.getItem('user')}
                        </Typography>
                        <IconButton color="inherit">
                            {/* <Badge badgeContent={4} color="secondary"> */}
                            <NotificationsIcon />
                            {/* </Badge> */}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}

                    open={this.state.open}
                >

                    <div className={classes.toolbarIcon}>

                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    {/* <Drawer> */}
                    <Router>
                        <div>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>

                                        <a href="/App"> <HomeIcon /></a>
                                    </ListItemIcon>


                                    {<a href="/App" >Student Registation</a>}
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/Excel"> <PersonOutlineOutlinedIcon /></a>


                                    </ListItemIcon>
                                    {/* <ListItemText primary={"Login"}/> */}

                                    <a href="/Excel" >Attendence Sheet
                        </a>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/Excel2"> <AddOutlinedIcon /></a>

                                    </ListItemIcon>
                                    {/* <ListItemText primary={"Sign Up"}/> */}
                                    <a href="/Excel2">Excel Sheet </a>

                                </ListItem>


                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/Assessment"> <HomeIcon /></a>

                                    </ListItemIcon>

                                    <a href="/Assessment" >Assessment Report</a>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/AssessmentDisplay"> <HomeIcon /></a>

                                    </ListItemIcon>

                                    <a href="/AssessmentDisplay" >Assesment Report Display</a>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/StudentProAdmin"> <HomeIcon /></a>

                                    </ListItemIcon>

                                    <a href="/StudentProAdmin" > Student Profile Display</a>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/TempDisplayReport"> <HomeIcon /></a>

                                    </ListItemIcon>

                                    <a href="/TempDisplayReport" > Temperature Report Display</a>
                                </ListItem>






                            </List></div></Router>
                    <Divider />
                </Drawer>


                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>



                    </Container>
                </main>

            </div>


        );
    }
}
export default withStyles(useStyles)(AdminDash);