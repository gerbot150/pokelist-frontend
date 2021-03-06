import React from 'react';
import PropTypes from 'prop-types';
import PokemonList from './PokemonList.jsx';

class RoutesList extends React.Component {
  render() {
    const { routes } = this.props;
    return routes.map(route =>
      <div className='routes-list' key={route.name}>
        <div>{route.name}</div>
        <PokemonList pokemon={route.pokemon} />
      </div>
    );
  }
}

RoutesList.propTypes = {
  routes: PropTypes.array.isRequired
};

export default RoutesList;
