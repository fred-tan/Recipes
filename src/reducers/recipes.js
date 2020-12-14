import data from '../data';
import slugify from 'slugify';

const initialState = {
  list: data,
};

const reducer = (state = initialState, action = {}) => {
switch (action.type) {
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

export default reducer;
