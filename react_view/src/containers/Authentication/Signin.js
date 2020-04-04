import React, { Component } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Copyright from '../../components/UI/Copyright/Copyright';
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignIn extends Component {
    state = {
        controls: {
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
        },
        isSignup: true,
        // errorMessages holds all the error messages for each input(email/password).
        errorMessages: [],
    };

    /**
     * Handler to update the local state based on the input value typed in input forms (email/password).
     * @param {object} event -  the target event selected by an user.
     * @param {string} controlName - the property name of the local state you want to change.
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
        const currentErrorMessage = this.state.controls[controlName].validity.errorMessage;
        const nextErrorMessage = updatedValidity.errorMessage;
        this.setState({
            errorMessages: updateErrorMessages(copiedErrorMessages, currentErrorMessage, nextErrorMessage),
        });
    };

    /**
     * Handler to trigger the dispatch for "auth" action along with the payload (email/password).
     * @param {object} event - the target event(input) selected by an user.
     */
    signinHandler = event => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value
        );
    };

    render() {
        const { classes } = this.props;

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        }

        let signinButton = (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled
                className={classes.submit}
            >
                Sign In
            </Button>
        );
        if (this.state.errorMessages.length === 0) {
            signinButton = (
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            );
        }

        return (
            <Container component="main" maxWidth="xs">
                {authRedirect}
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
                              />
                          );
                      })
                    : null}
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={this.signinHandler}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={event =>
                                this.inputChangedHandler(event, 'email')
                            }
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={event =>
                                this.inputChangedHandler(event, 'password')
                            }
                        />
                        {signinButton}
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    variant="body2"
                                    component={RouterLink}
                                    to="/signup"
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright link="http://localhost:3000/" />
                </Box>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        isAuthenticated: state.authReducer.token !== null,
        authRedirectPath: state.authReducer.authRedirectPath,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SignIn));
