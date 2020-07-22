import React, { Component } from 'react';
import {
    AppBar,
    Divider,
    CssBaseline,
    IconButton,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    Typography,
    SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
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
        display: "flex",
        justifyContent: "center"
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

class GatekeeperDash extends Component {
    constructor() {
        super();
        this.state = {
            open: false
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
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="absolute"
                        color="black"
                        className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
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
                            <Typography
                                variant="h4"
                                style={{
                                    fontWeight: "300",
                                    fontFamily: 'Lobster',
                                }}
                                noWrap
                                className={classes.title}>
                                <span>Gatekeeper</span>
                            </Typography>
                            <div style={{ fontFamily: "poppins", marginRight: "20px" }} >
                                {"Hello! " + localStorage.getItem('user')}
                            </div>

                            <div>
                                <button
                                    onClick={() => this.props.history.push('/')}
                                    style={{
                                        cursor: "pointer",
                                        color: "black",
                                        fontWeight: "500",
                                        border: "2px solid black",
                                        padding: "10px",
                                        backgroundColor: "white",
                                    }}
                                >
                                    Logout
                            </button>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <SwipeableDrawer
                        anchor="top"
                        open={this.state.open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <div>
                            <List>
                                <ListItem button>
                                    <a
                                        style={{ fontFamily: "Poppins", color: "black", textDecoration: "none" }}
                                        href="/TemperatureCheck">
                                        <ListItemIcon>
                                            <RateReviewIcon />
                                        </ListItemIcon>
                                    Temperature Check
                                    </a>
                                </ListItem>
                                <ListItem button>
                                    <a
                                        style={{ fontFamily: "Poppins", color: "black", textDecoration: "none" }}
                                        href="/GateTempReport">
                                        <ListItemIcon>
                                            <RateReviewIcon />
                                        </ListItemIcon>
                                    Temperature Report
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <Divider />
                    </SwipeableDrawer>

                </div >
                <div style={{ marginBottom: "120px" }}></div>
            </>
        );
    }
}
export default withRouter(withStyles(useStyles)(GatekeeperDash))