const START = 'START';
const GET_HASH = 'GET_HASH';
const RECEIVE_API = 'RECEIVE_API';

const INICIAL_STATE = {
  question: {},
  hash: '',
};

const questionReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case START: return state;
  case RECEIVE_API: return {
    ...state,
    question: action.data,
  };
  case GET_HASH:
    return {
      ...state,
      hash: action.hash,
    };
  default: return state;
  }
};

export default questionReducer;
