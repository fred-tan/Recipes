import { LOGIN_INPUT_CHANGE, LOGIN_INPUT_SUBMIT,LOGIN_INPUT_LOGOUT } from '../actions/user-actions';

const initialState = {
  loading: false,
  email: 'acidman@herocorp.io',
  password: 'fructis',
  isLogged: false,
  loggedMessage: 'Bienvenue lulu',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {  
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_INPUT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default user;
