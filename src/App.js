import React from 'react';
import { HashRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

function App() {
    return (
        <HashRouter>
            <ScrollToTop>
                <div className="App">
                    <Layout />
                </div>
            </ScrollToTop>
        </HashRouter>
    );
}

export default App;
