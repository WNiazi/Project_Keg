import React from 'react'
import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="brand"
          placeholder="Company/Brand" />
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol Content" />
        <input
          type="number"
          name="priceOfKeg"
          placeholder="Price per Keg" />
        <input 
          type="number"
          name="amountLeftInKeg"
          placeholder="Pints left in Keg" />
        <input 
          type="number"
          name="amountOfKeg"
          placeholder="Total Kegs" />
          <br></br>
          <button type='submit'>{props.buttonText}</button>
          <br></br>
      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}; 


export default ReusableForm;