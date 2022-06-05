import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';


function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecreasingPints, onClickingIncreasingKegs } = props;

  // const newAmountLeftInKeg = ((124-keg.amountLeftInKeg) * keg.amountOfKeg);

  return (
    <React.Fragment>
      <div className ="card">
        <h5>Keg Details:</h5>
        <div className ="card-header"> Brewery:  {keg.brand}</div>
        <div className ="card-body">
          <h4 class="card-title"> Name: {keg.name}</h4>
          <p class="card-text">
            <p>Alcohol Content %: {keg.alcoholContent}</p>
            <p>Price per Keg: ${keg.priceOfKeg}</p>
             <p>Amount of Kegs: {keg.amountOfKeg} </p>
            {/* <p>Amount Left in all Keg: {newAmountLeftInKeg }</p>  */}

            {keg.amountLeftInKeg===0 && keg.amountOfKeg ===0?  <button className="btn btn-danger">All Done</button> : <p>Amount Left in Open Keg: {keg.amountLeftInKeg}</p>}
            {keg.amountLeftInKeg > 0 && keg.amountLeftInKeg <= 10 ? <button className="btn btn-warning">Almost Done</button> : null}

          </p> 
        </div> 
        <div className ="card-header">For the Business Owners</div> 
        <button onClick={props.onClickingEdit} >Update/Edit Keg</button>
        <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <div className ="card-header">For the Buyers </div> 
          {/* <button onClick ={this.onClick}>Buy a Pint</button>  */}
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

export default KegDetail;

  // {/* <h1 className ={keg.amountLeftInKeg < 10 ? "positive": keg.amountLeftInKeg >10 ? "negative" : null} }>{keg.amountLeftInKeg} </h1> */}

// class Test extends React.Component {
//   onClick(event) {
//      func1();
//      func2();
//   }
//   render() {
//      return (
//         <a href="#" onClick={this.onClick}>Test Link</a>
//      );
//   }
// }
// <a href="#" onClick={() => { func1(); func2();}}>Test Link</a>

  // const [buttonText, setButtonText] = useState('Buy a Pint');
  // handleDrink() {
  //   if (keg.amountLeftInKeg <10 ){ 
  //     setButtonText('Almost done');
  //   }else if (keg.amountLeftInKeg === 0){ 
  //     setButtonText('All Done');
  //   }
  //    (keg.amountLeftInKeg >10)
  //     setButtonText('Keep Drinking');
  // //   }
  //       {/* <button onClick={() => {onClickingDecreasingPints(keg.id); {handleDrink};}}>{buttonText}</button> */}


  // {keg.pintsLeft === 0 ?
  //   <h3>Out of stock! Better luck next time.</h3>
  //   : <h3>Pints Remaining: {keg.pintsLeft}</h3>}
  //   {keg.pintsLeft > 0 && keg.pintsLeft <= 10
  //   ? <h4><em>Almost Empty - get 'em while they're cold!</em></h4>
  //   : null}
  //   { keg.pintsLeft > 0
  //   ? <button onClick={props.onClickingBuy} className="btn btn-success">Buy Pint</button>
  //   : <button onClick={props.onClickingRestock} className="btn btn-info">Restock Large Keg</button>}