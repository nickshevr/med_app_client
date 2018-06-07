import {
    FETCH_USER_SUCCESS,
} from '../constants/actionTypes';

import { normalizedUser } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case FETCH_USER_SUCCESS:
            const data = normalizedUser(payload);
            return { data, ...state };
        default:
            return state;
    }

    return state;
};
