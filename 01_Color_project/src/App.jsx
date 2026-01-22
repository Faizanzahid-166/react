import { useState } from "react";
import './App.css'

function App() {
 const [color , setColor] = useState("olive");

  return (
    <div className="width-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center bottom-12 bg-slate-100 rounded-3xl gap-3 px-3 py-2">
        
        <button onClick={() => setColor("red")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"Red"}}> Red</button>

        <button onClick={() => setColor("green")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"green"}}> Green</button>

        <button onClick={() => setColor("blue")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"blue"}}> blue</button>

        <button onClick={() => setColor("purple")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"purple"}}> purple</button>

        <button onClick={() => setColor("orange")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"orange"}}> orange</button>

        <button onClick={() => setColor("yellow")} className="text-black px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-white outline-none" style={{backgroundColor:"yellow"}}> yellow</button>

        <button onClick={() => setColor("brown")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"brown"}}> brown</button>

        <button onClick={() => setColor("skyblue")} className="text-white px-2 py-1 gap-2 rounded-3xl hover:bg-red-700 hover:text-black outline-none" style={{backgroundColor:"skyblue"}}> sky</button>
  
      </div>
      </div>
    </div>




    
  )
}

export default App
