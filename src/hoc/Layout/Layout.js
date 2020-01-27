import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import GameList from '../../containers/GameList/GameList';
import YourReview from '../../components/Review/YourReview/YourReview';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <div>SideDrawer</div>
                <main>
                    <Switch>
                        <Route path="/:id" exact component={YourReview} />}
                        <Route path="/" exact component={GameList} />
                    </Switch>
                </main>
            </Aux>
        );
    }
}

export default Layout;
