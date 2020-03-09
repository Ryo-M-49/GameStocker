import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import YourReviews from '../../components/YourReviews/YourReviews';
import Signin from '../../containers/Authentication/Signin';
import Signup from '../../containers/Authentication/Signup';
import GameList from '../../containers/GameList/GameList';
import YourReview from '../../components/YourReviews/YourReview/YourReview';
import MyPage from '../../components/MyPage/MyPage';
import Timeline from '../../components/Timeline/Timeline';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    toggleDrawerHandler = isOpen => {
        console.log('toggleDrawerHandler fired!');
        this.setState({ showSideDrawer: isOpen });
        console.log(this.state.showSideDrawer);
    };

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={() => this.toggleDrawerHandler(true)}
                    drawerToggleClosed={() => this.toggleDrawerHandler(false)}
                    isOpen={this.state.showSideDrawer}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <main>
                    <Switch>
                        <Route
                            path="/yourreviews"
                            exact
                            component={YourReviews}
                        />
                        <Route path="/signin" exact component={Signin} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/gamelist" exact component={GameList} />
                        <Route path="/mypage" component={MyPage} />
                        <Route path="/:id" exact component={YourReview} />
                        <Route path="/" exact component={Timeline} />
                    </Switch>
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.token !== null
    };
};

export default connect( mapStateToProps )( Layout );
