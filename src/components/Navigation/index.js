import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Navigation = ({list}) => (
<nav className="navigation">
    <a className="navigation-link active" href="/">Accueil</a>
    {
      list.map((navObject) => (
        <a
          key={navObject.id}
          className="navigation-link"
          href={navObject.slug}
        >
          {navObject.title}
        </a>
      ))
    }
  </nav>
);

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
