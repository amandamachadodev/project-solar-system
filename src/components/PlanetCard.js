import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const planetItem = `Planeta ${this.props.planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{this.props.planetName}</p>
        <img src={ this.props.planetImage } alt={ planetItem } />
      </div>
    );
  }
}

export default PlanetCard;
