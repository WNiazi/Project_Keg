import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      <div className ="card">
      {props.kegList.map((keg) => 
            <Keg
              whenKegClicked = {props.onKegSelection}
              brand={keg.brand}
              name={keg.name}
              alcoholContent={keg.alcoholContent}
              priceOfKeg={keg.priceOfKeg}
              amountLeftInKeg={keg.amountLeftInKeg}
              amountOfKeg={keg.amountOfKeg}
              id={keg.id}
              key={keg.id}/>
        )}
      </div> 
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList