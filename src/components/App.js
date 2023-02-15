// import React from 'react'
// import '../styles/App.css';
// const App = () => {

//   const handleInput = (event) =>{
//    // use console.log
//   }

//   // do not change id of input elements
//   return (
//     <div id="main">
//       <label htmlFor='text-input'>Text Input:- </label>
//       <input id="text-input" type={'text'} />

//       <br/>
//       <br/>

//       <label htmlFor='num-input'>Number input</label>
//       <input id="num-input"  type={'number'} />
//       <br/>
//     </div>
//   )
// }

import React, {useReducer} from 'react'
import '../styles/App.css';
const App = () => {
  const initialState = 1;

  const counterReducer = (state, action) => {
    switch(action){
      case "increment": return state + 1 ;
      case "decrement": return state - 1 ;
      default:
        return 0;
    }
  };
  
  const[state, disptch] = useReducer(counterReducer, initialState);

  return (
    <div id="main">
      <button id="increment" onClick={() => disptch("increment")}>Increment</button><br /> <br />
      {
        (state % 15 === 0 && (<div id="counter" className="fizzbuzz">{state}</div>)) ||
        (state % 5 === 0 && (<div id="counter" className="buzz">{state}</div>)) ||
        (state % 3 === 0 && (<div id="counter" className="fizz">{state}</div>)) ||
        (state % 3 !== 0 && state % 5 !== 0 && state % 15 !== 0 &&
          (<div id="counter" className="normal">{state}</div>)) 
      }
      <br />
      <button id="decrement" onClick={() => disptch("decrement")}>Decrement</button><br /> <br />
    </div>
  )
}

export default App;
