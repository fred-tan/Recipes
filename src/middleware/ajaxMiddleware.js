import axios from 'axios';
import {FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError} from '../actions/recipes';
import { LOGIN_INPUT_SUBMIT, loginSuccess, loginError, CHECK_AUTH } from '../actions/user-actions';
export default (store) => (next) => (action) => {
next(action);
  const {dispatch} = store;
 switch (action.type) {
 case CHECK_AUTH:
 axios({
   method: 'post',
   url: 'http://localhost:3001/isLogged',
   withCredentials: true,
 })
 .then((res)=>{
const {data} = res;
dispatch(loginSuccess(data));
 })
 .catch((err)=>{
console.error(err);
 });
 break;

 case FETCH_RECIPES:

axios({
method:'get',
url: 'http://localhost:3001/recipes',


})
.then((res)=>{
const{data}=res;
console.log(data);
dispatch(fetchRecipesSuccess(data));
})

.catch(()=>{
dispatch(fetchRecipesError());
});
      break;
    case LOGIN_INPUT_SUBMIT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        withCredentials: true,
        data: {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      })
        .then((res)=> {
          const serverResponse = res.data;
          console.log(serverResponse);
          dispatch(loginSuccess(serverResponse));
        })
        .catch((err) => {
          console.error(err);
          dispatch(loginError());
        });
      break;
    default:
      break;
  }
};
