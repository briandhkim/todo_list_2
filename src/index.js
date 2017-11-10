import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
// import promise from 'redux-promise';
import logger from './middleware/logger';
import promise from './middleware/promise_resolver';

import App from './components/app';

ReactDOM.render(
	<Provider store={ createStore(rootReducer,{},applyMiddleware(promise, logger)) }>
		<Router>
		    <App />
	    </Router>
    </Provider>,
    document.getElementById('root')
);
