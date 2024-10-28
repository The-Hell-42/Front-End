import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex felx wrap justify-between '>
      <h1 className='bg-red-500 flex flex-auto '>This is a  React App based on react router and react router dom</h1> 
        <h1 className='bg-red-500 flex flex-auto '>This is a  React App based on react router and react router dom</h1> 
    </div>
  )
}

export default App
