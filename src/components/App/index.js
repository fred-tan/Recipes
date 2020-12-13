// == Import npm
import React from 'react';

// == Import
import Recipe from 'src/components/Recipe';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import './styles.css';
import data from '../../data';

// == Composant
const App = () => (
  <div className="app">
    
    <Navigation/>
    <main className="main">
    <header className="header">oRecipe</header>
    <Home/>
    {/* <Recipe recipe={data[1]}/> */}
    </main>
    
  </div>
);

// == Export
export default App;
