import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  // const stockCheck = props.pints === 0 ? "Out of Stock" : props.pints;
  
  return (
    <React.Fragment>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} -{props.name}</h3>
        <p>Alcohol Content:{props.alcoholContent}% </p>
        <p>Price per Keg: ${props.priceOfKeg} </p>
        <p>Amount of Pints Left in Keg: {props.amountLeftInKeg}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  priceOfKeg: PropTypes.number.isRequired,
  amountLeftInKeg: PropTypes.number.isRequired, 
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;