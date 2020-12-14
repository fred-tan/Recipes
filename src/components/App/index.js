// == Import npm
import React from 'react';
import {Route} from 'react-router-dom';
import slugify from 'slugify';
// == Import
import Recipe from 'src/containers/Recipe';
import Navigation from 'src/containers/Navigation';
import Home from 'src/containers/Home';
import './styles.css';
import data from '../../data';



// == Composant
const App = () => (
  <div className="app">
    
    <Navigation />
    <main className="main">
    <header className="header">oRecipe</header>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/recipe/:slug" component={Recipe} />

      {/* <Route path="/recipe/:slug"
        render={(routerObject) => {
          console.log(routerObject);

          const {slug} = routerObject.match.params;

          const foundRecipe = data.find((recipeObject) => {
            const recipeUrl = slugifyTitle(recipeObject.title);
            const slugUrl = `/recipe/${slug}`
            return recipeUrl === slugUrl;
          });
          return <Recipe recipe={foundRecipe}/>;
        }}
      /> */}
    </main>
  </div>
);

// == Export
export default App;
