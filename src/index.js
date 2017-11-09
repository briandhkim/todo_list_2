import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';

import App from './components/app';

ReactDOM.render(
	<Provider store={ createStore(rootReducer,{},applyMiddleware(promise)) }>
		<Router>
		    <App />
	    </Router>
    </Provider>,
    document.getElementById('root')
);
