import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Home =() => (
<div className="home">
  <p>Bienvenue sur le site</p>
  <div className="cards-list">
    <div className="card">
      <img className="card-image" alt="illustration" src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
      <div className="card-infos">
      <h3 className="card-title" >Titre</h3>
      <p className="card-difficulty" >Difficulte: Facile</p>
      <a className="active" >Lien vers la recette</a>
      </div>
    </div>

    <div className="card">
      <img className="card-image" alt="illustration" src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
      <div className="card-infos">
      <h3 className="card-title" >Titre</h3>
      <p className="card-difficulty" >Difficulte: Facile</p>
      <a className="active" >Lien vers la recette</a>
      </div>
    </div>

    <div className="card">
      <img className="card-image" alt="illustration" src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
      <div className="card-infos">
      <h3 className="card-title" >Titre</h3>
      <p className="card-difficulty" >Difficulte: Facile</p>
      <a className="active" >Lien vers la recette</a>
      </div>
    </div>

    <div className="card">
      <img className="card-image" alt="illustration" src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
      <div className="card-infos">
      <h3 className="card-title" >Titre</h3>
      <p className="card-difficulty" >Difficulte: Facile</p>
      <a className="active" >Lien vers la recette</a>
      </div>
    </div>
    
  
  </div>
</div>
);

export default Home;
