import React   from "react";
import { Header,Footer } from "./components/index.js";
import { Outlet, Routes, Route } from "react-router";




export default function Dashboard() {
  return (
    <div className='min-h-screen  text-white bg-gray-400  flex flex-wrap content-between'>
      <div className='w-full block'>

        <Header />

        <main className='text-center'>
          <Outlet/>
        </main>
        {/* first make component
            second make pages
            third create router in main.jsx of each pages
            frouth make navbar ./component/header.jsx and give link of each page */}
        

      </div>
    </div>
  )
}
