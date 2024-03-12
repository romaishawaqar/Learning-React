import { useState } from "react";
import Card from "./Card";

function App() {

  const [Counter, setCounter] = useState(0);

  // function Clickedp(){
  //   setCounter(Counter+1);
  //   if(Counter > 20) setCounter(0);
  // }
  // function Clickedn(){
  //   setCounter(Counter-1);
  //   if(Counter < 0) setCounter(20);
  // }
  let users = ['Vivek', 'Romaisha', 'Anshu', 'Mummy', 'Papa', 'Dadi'];
  
  return (
    <>
     <h1 className="bg-green-400 text-black ">Tailwind Css use</h1>
     <h1>Vivek</h1>
     <div className="flex flex-row-reverse p-2">
        <Card name = {users[0]} />
        <Card name = {users[1]} />
        <Card name = {users[2]} />
     </div>
     <div class="flex flex-wrap">
        <Card name = {users[3]} />
        <Card name = {users[4]} />
        <Card name = {users[5]} />
     </div>
    </>
  )
}

export default App
