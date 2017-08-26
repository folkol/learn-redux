import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducers and actions and action creators are the core of redux
// action = object with "type" and parameters
// actionCreator = function that return a action
// reducer = something that takes actions and updates state/store
// dispatch = send action to reducers
// one reducer per piece of state

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
