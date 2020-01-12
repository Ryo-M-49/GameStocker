import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import GameList from '../../containers/GameList/GameList';
import YourReview from '../../components/YourReview/YourReview';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render () {
        return (
            <Aux>
                <Toolbar />
                <div>SideDrawer</div>
                <main>
                    <Switch>
                        <Route path="/:id" exact component={YourReview}/>}
                        <Route path="/" exact component={GameList}/>
                    </Switch>
                </main>
            </Aux>
        )
    }
}

export default Layout;