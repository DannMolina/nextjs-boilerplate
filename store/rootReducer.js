import { combineReducers } from 'redux';

import sampleReducer from './sample/reducers';

const rootReducer = (state, action, history) => {
	const allReducers = combineReducers({
		sample: sampleReducer,
	});

	return allReducers(state, action);
};

export default rootReducer;
