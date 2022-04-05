const LOGIN = 'LOGIN';
const START = 'START';
const RECEIVE_API = 'RECEIVE_API';

export const login = (value) => ({
  type: LOGIN,
  value,
});

export const actionInicial = () => ({
  type: START,
});

export const actionApi = (data) => ({
  type: RECEIVE_API,
  data,
});

export const requestApi = (token) => async (dispatch) => {
  dispatch(actionInicial());
  const response = await fetch(`https://opentdb.com/api.php?amount=$5&token=${token}`);
  const result = await response.json();
  return dispatch(actionApi(result));
};

// {
//   "response_code":0,
//   "response_message":"Token Generated Successfully!",
//   "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
// }
