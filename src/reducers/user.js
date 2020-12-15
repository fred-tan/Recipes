//import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions';

const initialState = {
  email: 'toto@toto.com',
  password: 'hey',
  isLogged: true,
  loggedMessage: 'Bienvenue lulu',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default user;
