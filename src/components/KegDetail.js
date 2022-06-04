import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecreasingPints, onClickingIncreasingKegs } = props;

  return (
    <React.Fragment>
      <div className ="card">
        <h5>Keg Details:</h5>
        <div className ="card-header"> Brand:  {keg.brand}</div>
        <div className ="card-body">
          <h3 class="card-title"> Name: {keg.name}</h3>
          <p class="card-text">
            <p>Alcohol Content: {keg.alcoholContent}</p>
            <p>Price per Keg: ${keg.priceOfKeg}</p>
            <p>Amount of Kegs: {keg.amountOfKeg} </p>
            <p>Amount Left in Keg: {keg.amountLeftInKeg}</p>
          </p> 
        </div> 
        <div className ="card-header">For the Business Owners</div> 
        <button onClick={props.onClickingEdit} >Update Keg</button>
        <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <div className ="card-header">For the Buyers </div>  
        <button onClick={() => onClickingDecreasingPints(keg.id)}>Buy a Pint</button> 
        <button onClick={() => onClickingIncreasingKegs(keg.id)}>Buy a Keg</button> 
      </div>
            
    
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncreasingKegs: PropTypes.func,
  onClickingDecreasingPints: PropTypes.func
}

export default KegDetail