import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charaAllowed , setcharaAllowed] = useState(false)
  const [Password , setpassword] = useState()
  const passref = useRef(null)
  const passwordgenerator = useCallback(() => {

        let pass = "" ;
        let string = "QWERTYUIOPLKJHGFDSAZXCVBNMqazwsxedcrfvtgbyhnujmikolp"

        if (numberAllowed) string += "1234567890"
        if (charaAllowed)  string += "{}][;'/.,<>`!~@#$%^&*()_+*-+"

        for (let i = 1; i <= length ;  i++) {
        let char = Math.floor(Math.random() * string.length + 1)
        pass += string.charAt(char)
        }

        setpassword(pass)
  },[length, numberAllowed, charaAllowed, setpassword  ]) 

  const copytoclip = useCallback(() => {
    passref.current?.select()
    passref.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
    },[Password]);
    useEffect( () => {
    passwordgenerator()
  },[length, numberAllowed, charaAllowed, passwordgenerator]);

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-slate-600'>
    <h1 className='text-center text-white'>Password Generator</h1>
      <div className='flex overflow-hidden rounded-lg mb-4'>
      <input 
      type="text" 
      placeholder='password' 
      value={Password} 
      readOnly 
      className='w-full py-1 px-3 outline-none'
      ref={passref} />
      <button className='bg-blue-700 text-yellow-50 outline-none 
      py-1  px-3' onClick={copytoclip}>copy</button>
      </div>
      <div className='flex text-sm gap-x-1'>

      <div className='flex items-center gap-x-2 '>
      <input type="range" 
      max={100} 
      min={6}  
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setlength(e.target.value)}}/>  
      <label>Length:{length} </label>
      </div>

      <div className='flex items-center gap-x-2 '>
      <input type="checkbox"
      defaultValue={charaAllowed}
      onChange={() => {setcharaAllowed((prev) => !prev)}} />
      <label>Chracter: {charaAllowed}</label>
      <div/>

      <div className='flex items-center gap-x-2'>
      <input type="checkbox"
      defaultValue={numberAllowed}
      onChange={() => {setnumberAllowed((prev) => !prev)}} />
      <label>Number: {numberAllowed}</label>
      </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
