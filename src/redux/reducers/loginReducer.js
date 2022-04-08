import { LOGIN, SCORE, SET_ASSERTIONS } from '../actions';

const initialState = {
  name: '',
  email: '',
  score: 0,
  assertions: 0,
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
  case SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  case SET_ASSERTIONS:
    return { ...state, assertions: action.payload };
  default:
    return state;
  }
}

export default loginReducer;
