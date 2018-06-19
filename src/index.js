import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
