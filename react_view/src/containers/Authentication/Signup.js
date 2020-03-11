import React, { Component } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Copyright from '../../components/UI/Copyright/Copyright';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as actions from '../../store/actions/index';

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
        userData: {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            passwordConfirmation: null,
        },
    };
    /**
     * Handler to update the local state based on the input value typed in input forms.
     * @param {object} event -  the target event selected by an user.
     * @param {string} controlName - the property name of the local state you want to change.
     * @returns {object} - the updated local state.
     */
    inputChangedHandler = (event, userDataName) => {
        const updatedUserData = {
            ...this.state.userData,
            [userDataName]: event.target.value,
        };
        this.setState({ userData: updatedUserData });
    };

    /**
     * Handler to trigger the handler to dispatch the signup action along with the local state (userData).
     * @param {object} event - the target event selected by an user.
     * @returns {null} - dispatches the signup action.
     */
    submitHandler = event => {
        event.preventDefault();
        this.props.onSignup(this.state.userData);
    };

    render() {
        const { classes } = this.props;

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error}</p>;
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        }

        return (
            <Container component="main" maxWidth="xs">
                {authRedirect}
                {errorMessage}
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
                        onSubmit={this.submitHandler}
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: userData => dispatch(actions.signup(userData)),
        onSetSignupRedirectPath: () =>
            dispatch(actions.setSignupRedirectPath('/')),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SignUp));
