import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  // let counter = 2

  // const addValue = () => {
  //   counter = counter + 1
  //   console.log(counter);
  // }

  return (
    <>
      <h1>React App by Anurag {counter}</h1>
      <h2>Counter : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button 
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App
