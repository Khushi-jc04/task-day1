import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'
import photo from "./assets/photo2.png"
import { Header } from './components/Header'
import { HomePage } from './Days/Day-2/Pages/HomePage'
import { Page1 } from './Days/Day-3/Page1'
function App() {
 
  return (
    <>
    <Page1/>
      {/* <HomePage/> */}
      {/* <div class="grid grid-flow-col"> */}
        {/* side bar*/}
        {/* <div class="row-span-3 w-50"> */}
          {/* <Sidebar /> */}
        {/* </div> */}
        {/* <div class="w-auto"> */}
          {/* right side screen */}
          {/* <div> */}
            {/* <Header /> */}
          {/* </div> */}
          {/* CARDS */}
          {/* <div> */}
            {/* <Card/> */}
          {/* </div> */}
          {/* image */}
          {/* <img src={photo} alt="error" width="800" className='m-7' /> */}
        {/* </div> */}
      {/* </div> */}

    </>)
}

export default App
