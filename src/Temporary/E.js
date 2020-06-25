import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import { Container, Typography } from '@material-ui/core';

const useStyles = ((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
class E extends Component {
    constructor() {
        super();
        this.state = {

            ID: '',
            st: false
        }
    }
    handleLogin = () => {
        if (this.state.ID == "12345") {
            alert("Hello")
            this.setState({ st: true })
        } else {
            alert("not loggedin")
        }
    }
    handleChangeFields = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })

    }
    render() {
        const { classes } = this.props
        return (
            <div>
                {this.state.ID}
                {this.state.st ? (<div> Welcome To The Dashboard</div>) : (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            {/* <Avatar className={classes.pink}><LockOutlinedIcon /></Avatar> */}
                            <Typography component="h1" variant="h3">
                                Log in
                            </Typography>
                            <div className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="ID"
                                    label="Student ID"
                                    name="ID"
                                    autoComplete="ID"
                                    autoFocus
                                    onChange={this.handleChangeFields} />
                                <Button
                                    onClick={this.handleLogin}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </Container>
                )}
            </div>
        );
    }
}
export default withStyles(useStyles)(E);