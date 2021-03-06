import React from 'react'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      brand: event.target.brand.value, 
      name: event.target.name.value,  
      alcoholContent: parseInt(event.target.alcoholContent.value), 
      amountLeftInKeg: parseInt(event.target.amountLeftInKeg.value), 
      priceOfKeg: parseInt(event.target.priceOfKeg.value), 
      amountOfKeg: parseInt(event.target.amountOfKeg.value), 
      id: v4()});
  }

  return (
    <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleNewKegFormSubmission}
          buttonText='Add New Keg' />
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm