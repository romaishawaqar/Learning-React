import './App.css'
import { useState, useCallback, useEffect } from 'react'

function App() {
  const [Str, setStr] = useState('')

  const [Length, setLength] = useState(6);
  const [charallowed, setCharallowed] = useState(false);
  const [numallowed, setNumallowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let s = "QWERTYUIOPASDFGHJKLMNBVCXZabcdefghijklmnopqrstuvwxyz";
    if(numallowed) s += "0123456789";
    if(charallowed) s += "!@#$%^&*(){}~:<>?/.,';][-_+=";
    for (let index = 1; index <= Length; index++) {
      let index = Math.floor(Math.random()*s.length);
      password += s.charAt(index);
    }

    setStr(password);

  }, [Length, charallowed, numallowed, setStr])


  useEffect(()=>{
    passwordGenerator()
  }, [Length, charallowed, numallowed, passwordGenerator])

  return (
      <>
      <h1 className='text-black text-4xl text-center'>Password Generator</h1>
      <div className='flex flex-wrap rounded-lg bg-yellow-400 h-10'>
        <input 
          type='text'
          value={Str}
          className='rounded-lg h-8 w-11/12 m-1'
          readOnly
        />
        <button className=''>Copy</button>
      </div>
      <div className='bg-green-400 h-40 m-4'>
        <div className='flex flex-wrap content-center'>
            <input
              type='range'
              min={6}
              max={50}
              value={Length}
              className='cursor-pointer'
              onChange={(event)=>{setLength(event.target.value)}}
            />
            <label className='my-3 mx-2'>Length: {Length}</label>
            <button onClick={()=>{setNumallowed((prev)=>(!prev))}} className='rounded-xl m-4 bg-black text-white'>Number</button>
            <button onClick={()=>{setCharallowed((prev) => (!prev))}} className='rounded-xl m-4 bg-black text-white'>Character</button>
        </div>
      </div>
      </>
  )
}

export default App
