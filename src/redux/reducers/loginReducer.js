const initialState = {
  name: '',
  email: '',
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, name: action.name, email: action.email };
  default:
    return state;
  }
}

export default loginReducer;
