import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import GameList from '../../containers/GameList/GameList';
import YourReview from '../../components/YourReviews/YourReview/YourReview';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import MyPage from '../../components/MyPage/MyPage';

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

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    open={this.state.showSideDrawer}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main>
                    <Switch>
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
