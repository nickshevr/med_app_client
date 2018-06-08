import {
    UPDATE_FIELD_AUTH,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    IS_AUTH,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case `${IS_AUTH}_SUCCESS`:
      return {
          isAuth: true,
          ...state,
      };
    case `${IS_AUTH}_ERROR`:
      return {
          isAuth: false,
          ...state,
      }

    default:
      return state;
  }

  return state;
};
