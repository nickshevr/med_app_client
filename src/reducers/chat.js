import {
    FETCH_CHAT_SUCCESS,
} from '../constants/actionTypes';

import { normalizedChat } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case FETCH_CHAT_SUCCESS:
            const data = normalizedChat(payload);
            return { data, ...state };
        default:
            return state;
    }

    return state;
};
