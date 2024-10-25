import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const genratePassword = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numberallowed) str += '0123456789'
    if (charallowed) str += '!@#$%^&*()_+-={}:<>?'
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, charallowed, numberallowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    genratePassword()
  }, [length, charallowed, numberallowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>
      <div className='flex tm-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={64}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={numberallowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
          <input
            type="checkbox"
            checked={charallowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            id="characters"
          />
          <label htmlFor="characters">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App