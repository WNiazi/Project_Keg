// import React, { useState } from "react";

// function amountLeftInKeg() {
//   const [amountLeftinKeg, setCount] = useState(0);
//   const handleDecrement = () => { 
//   if (amountLeftInKeg > 0)
//   setCount(amountLeftInKeg => amountLeftInKeg - 1);
//  };
//   return (
//     <div> 
  //        <h1 className={amountLeftInKeg > 0 ? "positive" : amountLeftInKeg < 0 ? "negative" : null}>{amountLeftInKeg}</h1>
//       <div>
//         <button onClick={handleDecrement}>Sell a Pint</button>
//         <h5>Count is {amountLeftInKeg}</h5>
//       </div>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
//  export default Counter;


// const { useState } = React;

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="app">
//       {
//         // if else statement to determine color of the counter
//       }
//       <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
//         {count}
//       </h1>
//       <div className="button__wrapper">
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   );
// }

// // ReactDOM.render(<App />, document.getElementById("root"));
// /*   color variables */
// /*   color variables */
// $clr-negative: #ff1744;
// $clr-positive: #2abf77;
// $clr-gray100: #f0f7f8;
// $clr-gray200: #cfd8dc;
// $clr-gray300: #a7b7be;
// $clr-gray400: #6b7e86;
// $clr-gray500: #425a65;

// /*   border radius */
// $radius: 0.2rem;

// *,
// *::before,
// *::after {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// .app {
//   font-family: Montserrat, sans-serif;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   height: 100vh;
//   background-color: $clr-gray100;
//   color: $clr-gray500;
// }

// h1 {
//   font-size: 6rem;
// }

// .button__wrapper {
//   display: flex;
//   gap: 1rem;

//   & > * {
//     border: none;
//     background-color: white;
//     box-shadow: 0px 0px 10px $clr-gray200;
//     font-weight: bold;
//     font-size: 2rem;
//     color: inherit;
//     border-radius: 50%;
//     outline: none;
//     height: 4rem;
//     width: 4rem;
//     cursor: pointer;
//     transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;

//     &:hover {
//       background-color: $clr-gray200;
//     }

//     &:active {
//       transform: scale(0.9);
//     }

//     &:focus {
//       box-shadow: 0 0 0 3px $clr-gray500;
//     }
//   }
// }

// .negative {
//   color: $clr-negative;
//   animation: pulse 500ms ease-in-out;
// }

// .positive {
//   color: $clr-positive;
//   animation: pulse 500ms ease-in-out;
// }

// @keyframes pulse {
//   0%,
//   100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.2);
//   }
// }
