/**
 * For dev testing only
 */
import { SET_SAMPLE } from './constants';

export const setSample = (payload) => {
	return {
		type: SET_SAMPLE,
		payload: payload,
	};
};
