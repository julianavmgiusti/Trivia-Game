import { LOGIN, SCORE } from '../actions';

const initialState = {
  name: '',
  email: '',
  score: 0,
  assertions: '',
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
  default:
    return state;
  }
}

export default loginReducer;
