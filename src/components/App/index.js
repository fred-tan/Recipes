// == Import npm
import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

// == Import
import Recipe from 'src/containers/Recipe';
import Navigation from 'src/containers/Navigation';
import Home from 'src/containers/Home';
import LoginForm from 'src/components/LoginForm';
import './styles.css';
import Error from 'src/containers/Error';

// == Composant
const App = ( {fetchRecipes}) => {
  useEffect(fetchRecipes, []);
return(
  <div className="app">

    <Navigation />
    <main className="main">
      <header className="header">oRecipe
        <LoginForm
          email="toto@toto.com"
          password="hey"
          isLogged={false}
          loggedMessage="Bienvenue lulu"
          changeField={(value,name) => {
            console.log('changeField', value, name);
          }}
          handleLogin={() => {
            console.log('login');
          }}
          handleLogout={() => {
            console.log('logout');
          }}
    /> 
    </header>
  <Error />
    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/recipe/:slug" component={Recipe} />

    </main>
  </div>
);
}
// == Export
export default App;
