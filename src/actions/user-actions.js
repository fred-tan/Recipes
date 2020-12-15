export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_INPUT_SUBMIT = 'LOGIN_INPUT_SUBMIT';
export const LOGIN_INPUT_LOGOUT = 'LOGIN_INPUT_LOGOUT';

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const loginInputSubmit = () => ({
  type: LOGIN_INPUT_SUBMIT,
});

export const loginInputLogout = () => ({
  type: LOGIN_INPUT_LOGOUT,
});