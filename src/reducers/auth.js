import {
    UPDATE_FIELD_AUTH,
    IS_AUTH,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
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
