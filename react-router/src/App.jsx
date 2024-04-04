import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white bg-orange-400 px-2 rounded-lg'>React Router Learning</h1>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
