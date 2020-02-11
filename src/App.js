import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div className="App">
                    <Layout />
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
