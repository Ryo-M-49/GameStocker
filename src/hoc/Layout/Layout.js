import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
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
                />
                <main>
                    <Switch>
                        <Route path="/timeline" exact component={Timeline} />
                        <Route path="/mypage" component={MyPage} />
                        <Route path="/:id" exact component={YourReview} />
                        <Route path="/" exact component={GameList} />
                    </Switch>
                </main>
            </Aux>
        );
    }
}

export default Layout;
