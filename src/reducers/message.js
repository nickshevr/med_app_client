import {
    FETCH_MESSAGE_SUCCESS,
} from '../constants/actionTypes';

import { normalizedMessage } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case FETCH_MESSAGE_SUCCESS:
            const data = normalizedMessage(payload);
            return { ...data, ...state };
        default:
            return state;
    }

    return state;
};
