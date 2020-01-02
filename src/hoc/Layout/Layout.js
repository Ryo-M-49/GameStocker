import React, { Component } from 'react';

import Aux from '../Aux/Aux';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render () {
        return (
            <Aux>
                <div>Toolbar</div>
                <div>SideDrawer</div>
                <main>
                    <h1>Main</h1>
                </main>
            </Aux>
        )
    }
}

export default Layout;