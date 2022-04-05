export const LOGIN = 'LOGIN';
export const GET_TOKEN = 'GET_TOKEN';

export const login = (value) => ({
  type: 'LOGIN',
  payload: value,
});

export const getToken = (payload) => ({
  type: GET_TOKEN,
  value: payload,
});

export const fetchTokenThunk = () => {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  return async () => {
    try {
      const respToken = await fetch(URL);
      const dataToken = await respToken.json();
      const { token } = dataToken;
      console.log(dataToken);
      localStorage.setItem('token', token);
    } catch (error) {
      return error.message;
    }
  };
};
