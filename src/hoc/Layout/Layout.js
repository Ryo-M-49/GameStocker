import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

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
                    <h1>Main</h1>
                </main>
            </Aux>
        )
    }
}

export default Layout;