// == Import npm
import React from 'react';

// == Import
import Recipe from 'src/components/Recipe';
import './styles.css';
import data from '../../data';

// == Composant
const App = () => (
  <div className="app">
    <Recipe recipe={data[1]}/>
  </div>
);

// == Export
export default App;
