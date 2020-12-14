// == Import npm
import React from 'react';
import {Route} from 'react-router-dom';
import slugify from 'slugify';
// == Import
import Recipe from 'src/components/Recipe';
import Navigation from 'src/containers/Navigation';
import Home from 'src/components/Home';
import './styles.css';
import data from '../../data';

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`



const homeData = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

// == Composant
const App = () => (
  <div className="app">
    
    <Navigation />
    <main className="main">
    <header className="header">oRecipe</header>

    <Route exact path="/">
    <Home list={homeData}/>
    </Route>

   {/*  <Route path="/recipe/:slug">
    <Recipe recipe={data[1]}/>
    </Route> */}
    
    <Route path="/recipe/:slug" 
    render={(routerObject)=>{
      console.log(routerObject);

const {slug} = routerObject.match.params;

const foundRecipe = data.find((recipeObject) => {
  const recipeUrl = slugifyTitle(recipeObject.title);
  const slugUrl = `/recipe/${slug}`
  return recipeUrl === slugUrl;
});

      return <Recipe recipe={foundRecipe}/>;
    }}/>
   


    </main>
    
  </div>
);

// == Export
export default App;
