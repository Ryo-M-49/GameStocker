import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import ReviewList from '../../components/ReviewList/ReviewList';
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
        let routes = (
            <Switch>
                <Route path="/users/:userId/yourreviews/:reviewId" component={YourReview} />
                <Route path="/reviews" component={ReviewList} />
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
                    <Route path="/users/:userId/yourreviews/:reviewId" component={YourReview} />
                    <Route path="/reviews" component={ReviewList} />
                    <Route path="/gamelist" component={GameList} />
                    <Route path="/mypage" component={MyPage} />
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
                    logoutHandler={this.props.onLogout}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <main>{routes}</main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
