import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState('8')
  const [password, setPassword] = useState('');

  const [hasNum, setHasNum] = useState(false);
  const [hasChar, setHasChar] = useState(false);

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='bg-red-100 mt-8'>
        <div className='flex flex-wrap '>
          <input className='' placeholder='your password' />
          <button className='w-12 right-0'>Copy</button>
        </div>
        <div className='flex flex-wrap '>
          <button className='w-12 right-0'>Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
