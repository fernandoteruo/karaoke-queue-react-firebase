import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger'
import AppReducer from "./reducers/AppReducer";
import {AppContainer} from "./containers/AppContainer";
import "./index.css"

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let store = createStore(AppReducer, applyMiddleware(...middleware));

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root')
);
