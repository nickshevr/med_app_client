import {
    FETCH_EMPLOYEE_SUCCESS,
} from '../constants/actionTypes';

import { normalizedEmployee } from "../schema";

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case FETCH_EMPLOYEE_SUCCESS:
            const data = normalizedEmployee(payload);
            return { data, ...state };
        default:
            return state;
    }

    return state;
};
