import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      editing: false,
     //amountLeftInKeg:0
     //decrease:true
     //increase: true
    };
  }
 //show page and able to go backwards
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }
//CRUD: creating new keg
  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }
//Details/read/CRUD
  handleChangingSelectedKeg = (id) => {
    const selectedKeg =this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }
//Details/deleting/CRUD
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }
//Details/Editing/CRUD
  handleEditClick = () => {
    this.setState({
      editing:true
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      mainKegList: editedMainKegList,
      editing: false,
      selectedKeg: null
    });
  }


// handlingDecreasingPintsClick = () => {
//   this.setState({
//     decrease :true
//   }); 
// } 
// handleDecreasingPints=(pintToEdit)=>{
//   const editedMainKegList = this.state.mainKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(pintToEdit);
//   if(pintToEdit.amountLeftInKeg===0){
//     this.setState({
//       mainKegList: editedMainKegList,
//       editing:false, 
//       selectedKeg: null});
//     }
//     pintToEdit.amountLeftInKeg -- ; 
//     this.setState({
//     mainKegList: editedMainKegList,
//     editing:false, 
//     selectedKeg: null
//   });
//}




//Details/Selling Pints
  // handleDecreasingPints = (id) => {
  //   const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
  //   { 
  //     const amountAvailable=selectedKeg.amountLeftInKeg;
  //      if (amountAvailable ===0){ 
  //           this.setState({
  //             amountAvailable: 0 
  //           }); 
  //         }else { 
  //           this.setState ({
  //             amountAvailable: selectedKeg.amountLeftInKeg -1
  //           });
  //         }
  //       }

  // handleDecreasingPints = (id) => {
   // const amountAvailable=selectedKeg.amountLeftInKeg-1;
  //     //have to put into a the array 
  //      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==this.state.selectedKeg.id).concat(selectedKeg);
  //      console.log(newMainKegList); 
  //      this.setState
  //      ({
  //        mainKegList: newMainKegList,
  //        amountLeftInKeg : selectedKeg.amountLeftInKeg-1,
  //        editing: true, 
  //        selectedKeg: selectedKeg
  //       });
  //   }
  // }


  // handleDecreasingPints =(id)=> { 
  //   const selectedKeg=this.state.mainKegList.filter(keg => keg.id === id)[0]
  //   // const amountAvailable =selectedKeg.amountLeftInKeg -1; 
  //   console.log(selectedKeg);

  //   this.setState (prevState=> ({ 
  //       selectedKeg: { 
  //       ...prevState.selectedKeg, 
  //       amountLeftInKeg: selectedKeg.amountLeftInKeg-1
  //     }
  //   }))
  //   console.log(selectedKeg);
  //   console.log(selectedKeg.amountLeftInKeg);
  // }
  
  // handleDecreasingPints =(id)=> { 
  //   const selectedKeg=this.state.mainKegList.filter(keg => keg.id === id)[0] 
  //   this.setState (prevState=> ({ 
  //     mainKegList: prevState.mainKegList.map(
  //       el=>el.key===key? {...el, amountLeftInKeg: amountLeftInKeg-1}: el
  //     )
  //   }))
  // }


// this.setStatet({...this.state.selectedKeg, amountLeftInKeg: amountAvailable}

// // Descreasing Pints
handleDecreasingPints = (id) => {
  const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
    if (selectedKeg.amountLeftInKeg >0) {
      selectedKeg.amountLeftInKeg--;
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
      this.setState
      ({
        mainKegList:newMainKegList
      });
  }
}
//Increasing Kegs
handleIncreasingKegs = (id) => { 
  const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]  
  selectedKeg.amountOfKeg++;
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
    this.setState
    ({
      mainKegList:newMainKegList
     }); 
}

//using spread to change values 
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";

    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg}
        onClickingDecreasingPints={this.handleDecreasingPints}
        onClickingIncreasingKegs={this.handleIncreasingKegs}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} />
        buttonText= "Return to Keg List";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";

    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
      buttonText = "Add a Keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;