import { useState } from "react";

function App() {

  const [Counter, setCounter] = useState(0);

  function Clickedp(){
    setCounter(Counter+1);
    if(Counter > 20) setCounter(0);
  }
  function Clickedn(){
    setCounter(Counter-1);
    if(Counter < 0) setCounter(20);
  }
  
  return (
    <>
    <h1>Vivek is learning react with vite</h1>
    <h1>Counter Value: {Counter}</h1>
    <button onClick={Clickedp}>+</button>
    <button onClick={Clickedn}>-</button>
    </>
  )
}

export default App
