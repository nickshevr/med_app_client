import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './reducers/auth';
import chat from './reducers/chat';
import message from './reducers/message';
import employee from './reducers/employee';
import consultance from './reducers/consultance';
import user from './reducers/user';

export default combineReducers({
  auth,
  chat,
  message,
  employee,
  consultance,
  user,
  router: routerReducer
});
