const initialState = {
  name: '',
  email: '',
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, value: action.value };
  default:
    return state;
  }
}

export default loginReducer;
