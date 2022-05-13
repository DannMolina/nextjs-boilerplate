import { compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// * enable redux devtools for dev mode & debugging local environments
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

// * enhancer
const enhancer = composeEnhancers(applyMiddleware(thunk));

// * create store
const store = configureStore({ reducer: rootReducer }, enhancer);

export default store;

/**
 * !! Do not edit here
 */
