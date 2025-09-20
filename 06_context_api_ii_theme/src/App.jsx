
import './App.css'
import { ThemeProvider } from './context/theme'
import React, { useEffect, useState } from 'react'
import Button  from "./components/Button";
import Card from './components/Card';

function App() {

 
 const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {setThemeMode("light") }
  const darkTheme = () => {setThemeMode("dark")}

  //actual use for thememode
  useEffect( () => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])



  return (
  
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}} >
     <Card  />
    
    <Button/>
    
   
    </ThemeProvider>
    
  )
}

export default App
