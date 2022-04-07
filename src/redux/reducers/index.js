import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  player: loginReducer,
  token: tokenReducer,
  questions: questionReducer,
});

export default rootReducer;
