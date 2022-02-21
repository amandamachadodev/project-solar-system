import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const planet = `Planeta ${this.props.planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{this.props.planetName}</p>
        <img src={this.props.planetImage} alt={planet}/>
      </div>
    );
  }
}

export default PlanetCard;
