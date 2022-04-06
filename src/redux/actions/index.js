export const LOGIN = 'LOGIN';
const START = 'START';
const RECEIVE_API = 'RECEIVE_API';
export const ADD_QUEST = 'ADD_QUEST';
export const ADD_TOKEN = 'ADD_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAIL = 'GET_TOKEN_FAIL';
export const GET_HASH = 'GET_HASH';

export const login = (name, email) => ({
  type: LOGIN,
  name,
  email,
});
export const actionInicial = () => ({
  type: START,
});

export const getHash = (hash) => ({ type: GET_HASH, hash });

export const actionApi = (data) => ({
  type: RECEIVE_API,
  data,
});

export const requestApi = (token) => async (dispatch) => {
  dispatch(actionInicial());
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);

  const result = await response.json();
  return dispatch(actionApi(result));
};

export const getTokenSuccess = (token) => ({
  type: GET_TOKEN_SUCCESS,
  token,
});

export const getTokenFail = (error) => ({
  type: GET_TOKEN_FAIL,
  error,
});

export const addToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});

export const addQuest = (payload) => ({
  type: ADD_QUEST,
  payload,
});

const tokenURL = 'https://opentdb.com/api_token.php?command=request';

export const fetchToken = async () => {
  const response = await fetch(tokenURL);
  const tokenResponse = await response.json();
  return Promise.resolve(tokenResponse);
};

export const fetchTokenThunk = () => async (dispatch) => {
  try {
    const { token } = await fetchToken();
    dispatch(getTokenSuccess(token));
  } catch (error) {
    dispatch(getTokenFail(error));
  }
};
