export const LOGIN = 'LOGIN';
// export const GET_TOKEN = 'GET_TOKEN';
export const ADD_QUEST = 'ADD_QUEST';
export const ADD_TOKEN = 'ADD_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAIL = 'GET_TOKEN_FAIL';

export const login = (value) => ({
  type: LOGIN, payload: value,
});

// ex// port const getToken = () => ({
//   // type: GET_TOKEN,
// // })// ;

export const getTokenSuccess = (tokenAPI) => ({
  type: GET_TOKEN_SUCCESS,
  tokenAPI,
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
    const tokenAPI = await fetchToken();
    dispatch(getTokenSuccess(tokenAPI));
  } catch (error) {
    dispatch(getTokenFail(error));
  }
};

// export const fetchTokenThunk = () => {
//   const URL = 'https://opentdb.com/api_token.php?command=request';
//   return async () => {
//     try {
//       const respToken = await fetch(URL);
//       const dataToken = await respToken.json();
//       const { token } = dataToken;
//       console.log(dataToken);
//       const urlQuest = `https://opentdb.com/api.php?amount=5&token=${token}`;
//       const respQuest = await fetch(urlQuest);
//       const dataQuest = await respQuest.json();
//       const codeError = 3;
//       if (dataQuest.response_code === codeError) {
//         dispatch(fetchTokenThunk());
//       }
//       const { results } = dataQuest;
//       dispatch(addQuest(results));
//       dispatch(addToken(token));
//     } catch (error) {
//       return error.message;
//     }
//   };
// };
