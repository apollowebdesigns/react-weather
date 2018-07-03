import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

ReactDOM.render(
    <HashRouter basename="/">
        <App/>
    </HashRouter>,
     document.getElementById('root'));
registerServiceWorker();
