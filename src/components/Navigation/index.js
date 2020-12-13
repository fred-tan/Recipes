import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Navigation = () => (
<div className="navigation">
  <a className="navigation-link active" href="#">Accueil</a>
  <a className="navigation-link" href="#">Recette 1</a>
  <a className="navigation-link" href="#">Recette 2</a>
  <a className="navigation-link" href="#">Recette 3</a>
  <a className="navigation-link" href="#">Recette 4</a>
</div>
);

export default Navigation;
