import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  token: tokenReducer,
});

export default rootReducer;
