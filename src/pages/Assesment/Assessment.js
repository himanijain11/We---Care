import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Axios from 'axios';
import AdminDash from '../AdminDash/AdminDash';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        alignSelf: "center"
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),

    },

    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getSteps() {
    return ['Please note that information from this chat will be used for monitoring and management of the current health crisis and research in the fight against COVID-19.', '', '', '', '', '', ''];
}

class Assesment extends Component {
    state = {
        activeStep: 0,
        optionSelected: {
            a: "",
            b: "",
            c: "",
            d: "",
            message: ""
        },
        filled: false
    }

    fun(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData = () => {
        const a = this.state.optionSelected.a
        const b = this.state.optionSelected.b
        const c = this.state.optionSelected.c
        const d = this.state.optionSelected.d
        const username = localStorage.getItem('user')

        const data = {
            t1: a,
            t2: b,
            t3: c,
            t4: d,
            username: username
        }

        Axios.get('http://localhost:8080/examples/fresh.jsp', { params: data }).then(response => {
            console.log(response);
            this.setState({
                message: response.data.response
            })
        }).catch(err => {
            console.log("Failed");


        })
    }



    render() {
        const steps = getSteps();
        const { classes } = this.props
        const data = [
            {
                question: "Are you experiencing any of the following symptoms ?",
                option: [
                    "Cough",
                    "Fever",
                    "Difficulty in breathing",
                    "Loss of senses of smell and taste",
                    "None of the above"
                ]
            },
            {
                question: "Have you ever had any of the following ?",
                option: [
                    "Diabetes",
                    "Hypertension",
                    "Lung disease",
                    "Heart disease",
                    "Kidney disease",
                    "None of the above"
                ]
            },
            {
                question: "Have you travelled anywhere internationally in the last 28-45 days ?",
                option: [
                    "Yes",
                    "No"
                ]
            },
            {
                question: "Which of these following ?",
                option: [
                    "I have recently interacted or lived with someone who has tested positive for COVID-19",
                    "I am healthcare worker and i examine COVID-19 confirmed case without protective gear",
                    "None of the above"
                ]
            },
        ]

        const handleNext = (event) => {
            let que
            const ind = [...event.target.value.split('@')]
            switch (parseInt(ind[1])) {
                case 0:
                    que = 'a'
                    break
                case 1:
                    que = 'b'
                    break
                case 2:
                    que = 'c'
                    break
                case 3:
                    que = 'd'
                    break
                default:
                    break
            }

            let optionSelected = {
                ...this.state.optionSelected,
                [que]: ind[0],
                filled: this.state.optionSelected.d !== null
            }
            this.setState({ optionSelected, activeStep: this.state.activeStep + 1, })
        };
        const handleBack = () => {
            this.setState({ activeStep: this.state.activeStep - 1 })
        };
        const handleReset = () => {
            this.setState({ activeStep: 0 })
        };

        console.log(this.props)
        return (
            <React.Fragment>
                <AdminDash />
                <div
                    style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        background: "#fafafa",
                        width:"100%                     "
                    }}
                    className={classes.root}>
                    <div><h1>Self Assesment Test</h1><br /></div>
                    <Stepper activeStep={this.state.activeStep} orientation="vertical">
                        {data.map((data, index) => (
                            <Step key={index}>
                                <StepLabel style={{ fontSize: "3rem", fontVariantCaps: "true" }}>{data.question}</StepLabel>
                                <StepContent>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <div>
                                                <Select
                                                    placeholder="Choose Here"
                                                    labelId="demo-simple-select-label"
                                                    style={{ width: "50%" }}
                                                    onChange={handleNext}
                                                >
                                                    {data.option.map(option => (
                                                        <MenuItem value={option + "@" + index}>{option}</MenuItem>
                                                    ))}
                                                </Select>
                                                <Button
                                                    disabled={this.state.activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                            </Button>
                                            </div>

                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                        <Button
                            style={{
                                marginTop: "35px"
                            }}
                            variant="outlined"
                            disabled={this.state.filled}
                            onClick={this.sendData}
                        >
                            Finish
                        </Button>
                    </Stepper>
                    {this.state.activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
          </Button>
                        </Paper>
                    )}
                </div>
            </React.Fragment>

        );
    }
}
export default withStyles(useStyles)(Assesment)
