import React from 'react'
import PropTypes from 'prop-types'

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecreasingPints } = props;

  return (
    <React.Fragment>
       <div>
        <h5>Keg Details:</h5>
       <h3>Brand: {keg.brand} Name: {keg.name}</h3>
            <p>Alcohol Content: <em>{keg.alcoholContent}</em></p>
            <p>Price per Keg: ${keg.priceOfKeg}</p>
            <p>Amount Left in Keg: {keg.amountLeftInKeg}</p>
        </div>
      
            <button onClick={props.onClickingEdit} >Update Keg</button>
            <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
            <button onClick={() => onClickingDecreasingPints(keg.id)}>Buy a Pint</button> 
            {/* <button onClick={() => onClickingIncrease(keg.id)}>Buy a Keg</button>  */}
            
    
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  // onClickingIncrease: PropTypes.func,
  onClickingDecreasingPints: PropTypes.func
}

export default KegDetail