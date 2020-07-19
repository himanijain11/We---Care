
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
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles, } from '@material-ui/core/styles';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PortraitIcon from '@material-ui/icons/Portrait';
import RateReviewIcon from '@material-ui/icons/RateReview';
import EventNoteIcon from '@material-ui/icons/EventNote';
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
                        <div>
                            <button onClick={() => this.props.history.push('/')} style={{ color: "black", border: "0px", borderRadius: "10px", padding: "10px", backgroundColor: "white" }}>Logout</button>
                        </div>
                        <IconButton color="inherit">
                            <NotificationsIcon />
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
                    <Router>
                        <div>
                            <List>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/App">  <GroupAddIcon />  </a>
                                    </ListItemIcon>
                                    {<a href="/App" >Student Registation</a>}
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/Assessment"> <AssessmentIcon /></a>
                                    </ListItemIcon>
                                    <a href="/Assessment" >Self Assessment </a>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/AssessmentDisplay"> <EventNoteIcon /></a>
                                    </ListItemIcon>
                                    <a href="/AssessmentDisplay" >Self Assesment Report </a>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/StudentProAdmin"> <PortraitIcon /></a>
                                    </ListItemIcon>
                                    <a href="/StudentProAdmin" > Student Profile Display</a>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/TempDisplayReport"> <RateReviewIcon /></a>
                                    </ListItemIcon>
                                    <a href="/TempDisplayReport" > Temperaturecheck Report </a>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <a href="/HealthStats"> <RateReviewIcon /></a>
                                    </ListItemIcon>
                                    <a href="/HealthStats" >Health Stats</a>
                                </ListItem>
                            </List></div></Router>
                    <Divider />
                </Drawer>
            </div>
        );
    }
}
export default withRouter(withStyles(useStyles)(AdminDash))