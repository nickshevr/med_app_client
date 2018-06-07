import {
    FETCH_CONSULTANCE_SUCCESS,
} from '../constants/actionTypes';

import { normalizedConsultance } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case FETCH_CONSULTANCE_SUCCESS:
            const data = normalizedConsultance(payload);
            return { data, ...state };
        default:
            return state;
    }

    return state;
};
