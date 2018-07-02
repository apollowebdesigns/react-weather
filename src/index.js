import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <HashRouter basename="/">
        <App/>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
