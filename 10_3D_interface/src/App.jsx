import { useState } from 'react'
import './App.css'
import ThreeScene from "./components/3D Canvas/ThreeCube.jsx";
import ThreeBackground  from './components/3D Canvas/ThreeBackground.jsx'
import Navbar from './components/header/Navbar.jsx'
import Sidebar from './components/header/Sidebar.jsx'
import {Outlet} from 'react-router'



function App() {
  return (
    <>
      <ThreeBackground />

      <Navbar  />

      <div className="flex h-screen ">

      <Sidebar  />

       {/* Right side changes based on route */}
     <main className="flex flex-1 p-6 overflow-y-hidden justify-center items-center">
       <Outlet />
      </main>
      </div>
    </>
  );
}

export default App;
