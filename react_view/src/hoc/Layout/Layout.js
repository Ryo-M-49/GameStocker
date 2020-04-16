import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Reviews from '../../components/Reviews/Reviews';
import Signin from '../../containers/Authentication/Signin';
import Signup from '../../containers/Authentication/Signup';
import GameList from '../../containers/GameList/GameList';
import YourReview from '../../components/YourReview/YourReview';
import MyPage from '../../components/MyPage/MyPage';
import Timeline from '../../components/Timeline/Timeline';

import * as actions from '../../store/actions/index';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    componentDidMount() {
        this.props.onTryAutoSignup();
        const timer = setTimeout(() => {
            if (this.props.userId) {
                this.props.onGetUser(this.props.userId);
            }
        }, 200);
        return () => clearTimeout(timer);
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    toggleDrawerHandler = isOpen => {
        this.setState({ showSideDrawer: isOpen });
    };

    render() {
        let gameListRedirect = null;
        if (this.props.isSearched) {
            gameListRedirect = <Redirect to="/gamelist" />;
        }
        let routes = (
            <Switch>
                {gameListRedirect}
                <Route
                    path="/users/:userId/reviews/:reviewId"
                    component={YourReview}
                />
                <Route path="/users/:userId/reviews" component={Reviews} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/gamelist" component={GameList} />
                <Route path="/" exact component={Timeline} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    {gameListRedirect}
                    <Route
                        path="/users/:userId/reviews/:reviewId"
                        component={YourReview}
                    />
                    <Route path="/users/:userId/reviews" component={Reviews} />
                    <Route path="/users/:userId" component={MyPage} />
                    <Route path="/gamelist" component={GameList} />
                    <Route path="/" exact component={Timeline} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={() => this.toggleDrawerHandler(true)}
                    drawerToggleClosed={() => this.toggleDrawerHandler(false)}
                    isOpen={this.state.showSideDrawer}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <main>{routes}</main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.authReducer.userId,
        isAuthenticated: state.authReducer.token !== null,
        isSearched: state.gameListReducer.isSearched,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        onGetUser: (userId) => dispatch(actions.getUser(userId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
