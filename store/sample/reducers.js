/**
 * For dev testing only
 */

import {SET_SAMPLE, SET_SAMPLE_API} from './constants';
const initialState = {
    sampleState: 'sample',
    sampleApiData: {},
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_SAMPLE: {
            return {
                ...state,
                sampleState: payload,
            };
        }
        case SET_SAMPLE_API: {
            return {
                ...state,
                sampleApiData: payload,
            };
        }
        default:
            return state;
    }
}
