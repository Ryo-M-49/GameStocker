import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import thunk from 'redux-thunk';
import gameListReducer from './store/reducers/gameList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    gameListReducer: gameListReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <div className="App">
                        <Layout />
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
