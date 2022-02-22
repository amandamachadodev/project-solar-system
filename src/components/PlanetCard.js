import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const planetItem = `Planeta ${planetName}`;
    return (
      <div className="Planet">
        <div data-testid="planet-card" className="PlanetCard">
          <p data-testid="planet-name">{planetName}</p>
          <img src={ planetImage } alt={ planetItem } width="150px" />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
export default PlanetCard;
