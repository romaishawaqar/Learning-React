import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: bgColor}}>
        <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setBgColor('red')} className='outline-none px-4 py-1 bg-red-500 text-black rounded-full'>
              red
            </button>
            <button onClick={() => setBgColor('blue')} className='outline-none px-4 py-1 bg-blue-500 text-black rounded-full'>
              blue
            </button>
            <button onClick={() => setBgColor('yellow')} className='outline-none px-4 py-1 bg-yellow-500 text-black rounded-full'>
              yellow
            </button>
            <button onClick={() => setBgColor('green')} className='outline-none px-4 py-1 bg-green-500 text-black rounded-full'>
              green
            </button>
          </div>
        </div>
      </ div>
      
    </>
  )
}

export default App
