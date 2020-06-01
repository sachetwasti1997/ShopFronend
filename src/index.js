//import React and ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import './App.css';
import App from './shop/App.js';

//bundler system called webpack is used in the project

//create a react component
const storeCreate = createStore(reducer, applyMiddleware(thunk));

//take the react component and show it on screen
ReactDOM.render(
    <Provider store={storeCreate}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);