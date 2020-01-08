import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import GameList from '../../containers/GameList/GameList';

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
                    <GameList />
                </main>
            </Aux>
        )
    }
}

export default Layout;