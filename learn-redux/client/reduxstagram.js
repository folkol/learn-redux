import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
	tags: {
		git_commit: 'asdfasf3423',
		userLevel: 'editor'
	}
}).install();

// logException(new Error('Oh noes :('), {
	// email: 'mattias4@kth.se'
// });
// console.log(window.adf.nope);
// Raven.captureMessage('Something bad happened');
// Raven.showReportDialog();

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Router path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Router>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));
