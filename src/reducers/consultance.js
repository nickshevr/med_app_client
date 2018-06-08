import {
    FETCH_CONSULTANCE_SUCCESS,
    CREATE_CONSULTANCE_SUCCESS,
} from '../constants/actionTypes';

import { normalizedConsultance } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case CREATE_CONSULTANCE_SUCCESS:
        case FETCH_CONSULTANCE_SUCCESS:
            const data = normalizedConsultance(payload);
            return { data, ...state };
        default:
            return state;
    }

    return state;
};
