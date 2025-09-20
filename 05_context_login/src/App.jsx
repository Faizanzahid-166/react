import React,{ useContext } from "react";
import './App.css';
import UsercontextProvider from './context/UsercontextProvider.jsx'; // ✅ Fix casing
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import ThemeContext from "./context/ThemeContext.js";

function App() {
   const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    
     
      <UsercontextProvider>
       <div className={` min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"} p-4`}>

      <h1 className="text-2xl text-center">User login</h1>
      <button onClick={toggleTheme} className="m-auto mt-2 px-4 py-2 flex  bg-gray-500 text-white rounded-md">
        Toggle Theme
      </button>
 
      
        <Login />
        <Profile />
 
    </div>
         </ UsercontextProvider >
  );
}

export default App;
