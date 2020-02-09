import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { saveToLocalStorage, loadFromLocalStorage } from './helpers/storageWorker';
import {authTracker} from './helpers/authTracker'

const persistedState = loadFromLocalStorage();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
