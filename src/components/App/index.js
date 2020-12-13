// == Import npm
import React from 'react';
import {Route} from 'react-router-dom';
import slugify from 'slugify';
// == Import
import Recipe from 'src/components/Recipe';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import './styles.css';
import data from '../../data';

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`

const navList = data.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
}));

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
    
    <Navigation list={navList}/>
    <main className="main">
    <header className="header">oRecipe</header>

    <Route exact path="/">
    <Home list={homeData}/>
    </Route>

   {/*  <Route path="/recipe/:slug">
    <Recipe recipe={data[1]}/>
    </Route> */}
    
    <Route path="/recipe/:slug" 
    render={(unTruc)=>{
      console.log(unTruc);
      return <Recipe recipe={data[1]}/>;
    }}/>
   


    </main>
    
  </div>
);

// == Export
export default App;
