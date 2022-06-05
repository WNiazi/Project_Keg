import React from 'react'
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      brand: event.target.brand.value, 
      name: event.target.name.value,  
      alcoholContent: parseInt(event.target.alcoholContent.value), 
      amountLeftInKeg: parseInt(event.target.amountLeftInKeg.value), 
      priceOfKeg: parseInt(event.target.priceOfKeg.value), 
      amountOfKeg: parseInt(event.target.amountOfKeg.value),
      id: keg.id
    });
  }
  return (
    <React.Fragment>

      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText='Update Keg' />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;