import React, {useState} from 'react'
import './App.css';


// Create a store to keep our global state -> /store/index.js
// We need to wrap our App in order to have access to that store
// In any file that we need access to the store, we need to connect to that store
// Activate ReduxDevTools
// Create the action that will trigger a change in the store -> /actions/index.js
// Create a reducer that will contain the code to change our store -> /reducers/index.js

// Original component
// const App = (props) => {
//   let [title] = useState('Hello from the state')
//   let [counter, setCounter] = useState(0)

//   const increase = () => setCounter(counter + 1)
//   const decrease = () => setCounter(counter - 1)

//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <h2>Counter: {counter}</h2>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

import {connect} from 'react-redux'
import { increaseCounter, decreaseCounter} from './actions'

const App = (props) => {

  const increase = () => props.dispatch(increaseCounter(props.count))
  const decrease = () => props.dispatch(decreaseCounter(props.count))

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <h2>Counter: {props.count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    count: state.count,
    title: state.title
  }
}


export default connect(mapStateToProps)(App);
