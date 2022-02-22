import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { name, image } = this.props.planetData;
    const planetItem = `Planeta ${name}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{name}</p>
        <img src={ image } alt={ planetItem } />
      </div>
    );
  }
}

export default PlanetCard;
