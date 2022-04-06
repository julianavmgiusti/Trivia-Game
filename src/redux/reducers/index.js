import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  token: tokenReducer,
  questions: questionReducer,
});

export default rootReducer;
