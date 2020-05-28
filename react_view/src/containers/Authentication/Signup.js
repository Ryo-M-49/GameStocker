import React, { Component } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Copyright from '../../components/UI/Copyright/Copyright';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as actions from '../../store/actions/index';
import { updateErrorMessages, checkValidity } from '../../shared/utility';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignUp extends Component {
    state = {
        controls: {
            firstName: {
                value: '',
                validation: {
                    required: true,
                },
                validity: {
                    isValid: false,
                    errorMessage: null,
                },
            },
            lastName: {
                value: '',
                validation: {
                    required: true,
                },
                validity: {
                    isValid: false,
                    errorMessage: null,
                },
            },
            email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                validity: {
                    isValid: false,
                    errorMessage: null,
                },
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                validity: {
                    isValid: false,
                    errorMessage: null,
                },
            },
            passwordConfirmation: {
                value: '',
                validation: {
                    required: true,
                },
                validity: {
                    isValid: false,
                    errorMessage: null,
                },
            },
        },
        // errorMessages holds all the error messages for each input(name/email/password etc.).
        errorMessages: [],
    };

    /**
     * Handler to update the local state based on the input value typed in input forms (email/password).
     * @param {object} event -  the target event selected by an user.
     * @param {string} controlName - the property name of the local state you want to change.
     * @returns {object} - the updated local state.
     */
    inputChangedHandler = (event, controlName) => {
        // Update the inside of "controlName" state based on the latest user's input.
        const updatedValidity = checkValidity(
            event.target.value,
            this.state.controls[controlName].validation
        );
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                validity: updatedValidity,
            },
        };
        this.setState({ controls: updatedControls });

        // Update "errorMessages" state based on the latest user's input.
        const copiedErrorMessages = [...this.state.errorMessages];
        const currentErrorMessage = this.state.controls[controlName].validity
            .errorMessage;
        const nextErrorMessage = updatedValidity.errorMessage;
        this.setState({
            errorMessages: updateErrorMessages(
                copiedErrorMessages,
                currentErrorMessage,
                nextErrorMessage
            ),
        });
    };

    /**
     * Handler to trigger the handler to dispatch the signup action along with the local state (controls).
     * @param {object} event - the target event selected by an user.
     * @returns {null} - dispatches the signup action.
     */
    signupHandler = event => {
        event.preventDefault();
        this.props.onSignup(this.state.controls);
    };

    snackbarClosedHandler = () => {
        const snackbar = {
            isOpen: false,
            type: null,
        };
        this.props.onToggleAuthSnackbar(snackbar);
    };

    render() {
        const { classes } = this.props;

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        }

        let signupButton = (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled
                className={classes.submit}
            >
                Sign Up
            </Button>
        );
        if (this.state.errorMessages.length === 0) {
            signupButton = (
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
            );
        }

        let signinErrorMessage = null;
        if (this.props.error) {
            signinErrorMessage = (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.props.isSnackbarOpen}
                    onClose={this.snackbarClosedHandler}
                >
                    <Alert severity="error">{this.props.error.message}</Alert>
                </Snackbar>
            );
        }

        return (
            <Container component="main" maxWidth="xs">
                {authRedirect}
                {signinErrorMessage}
                {this.state.errorMessages.length > 0
                    ? this.state.errorMessages.map((errorMessage, index) => {
                          return (
                              <Snackbar
                                  anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                  }}
                                  key={index}
                                  open={errorMessage.isSnackbarOpen}
                                  message={errorMessage.message}
                              >
                                  <Alert severity="error">
                                      {errorMessage.message}
                                  </Alert>
                              </Snackbar>
                          );
                      })
                    : null}
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={this.signupHandler}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'firstName'
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'lastName'
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={event =>
                                        this.inputChangedHandler(event, 'email')
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'password'
                                        )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="passwordConfirmation"
                                    label="Password Confirmation"
                                    type="password"
                                    id="passwordConfirmation"
                                    autoComplete="current-password"
                                    onChange={event =>
                                        this.inputChangedHandler(
                                            event,
                                            'passwordConfirmation'
                                        )
                                    }
                                />
                            </Grid>
                        </Grid>
                        {signupButton}
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link
                                    variant="body2"
                                    component={RouterLink}
                                    to="/signin"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright link="http://localhost:3000/" />
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.signupReducer.loading,
        error: state.signupReducer.error,
        signupRedirectPath: state.signupReducer.signupRedirectPath,
        isAuthenticated: state.authReducer.token !== null,
        error: state.signupReducer.error,
        isSnackbarOpen: state.authReducer.isSnackbarOpen.isOpen,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: controls => dispatch(actions.signup(controls)),
        onSetSignupRedirectPath: () =>
            dispatch(actions.setSignupRedirectPath('/')),
        onToggleAuthSnackbar: snackbar =>
            dispatch(actions.toggleAuthSnackbar(snackbar)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SignUp));
