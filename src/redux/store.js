import { createStore } from 'redux';
import { reducer } from './reducers';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;