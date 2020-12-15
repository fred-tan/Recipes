import axios from 'axios';
import {FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError} from '../actions/recipes';

export default (store) => (next) => (action) => {


  next(action);
  const {dispatch} = store;
 switch (action.type) { 
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
   default:
     break;
  } 
};
