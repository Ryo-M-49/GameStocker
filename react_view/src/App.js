import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import gameListReducer from './store/reducers/gameList';
import authReducer from './store/reducers/auth';
import signupReducer from './store/reducers/signup';
import userReducer from './store/reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    gameListReducer: gameListReducer,
    authReducer: authReducer,
    signupReducer: signupReducer,
    userReducer: userReducer
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
