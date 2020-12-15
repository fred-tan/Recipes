import {FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR} from '../actions/recipes';
import slugify from 'slugify';

const initialState = {
  list: [],
  error:null,
};

const reducer = (state = initialState, action = {}) => {
switch (action.type) {
  case FETCH_RECIPES_ERROR:
  return{
    ...state,
    error: 'Impossible de recuperer les recettes',
  };
  case FETCH_RECIPES_SUCCESS:
    return {
      ...state,
      list:[...action.payload],
      error: null,
    };
    default:
      return state;
  }
};

// Selectors
// Une fonction qui recoit en parametres de la data brute
// et qui me renvoit juste ce dont j'ai besoin a partir de cette data

/* const navList = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
})); */

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`



export const getNavFromRecipes = (recipes) => recipes.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
}));

export const getHomeCards = (recipes) => recipes.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

export const findRecipeFromSlug = (recipes,url) => (

recipes.find((recipeObject) => slugifyTitle(recipeObject.title) === url)
);

export default reducer;
