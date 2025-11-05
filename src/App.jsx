import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Card } from './components/Card'
import photo from "./assets/photo2.png"
import { Header } from './components/Header'
// import { HomePage } from './Days/Day-2/Pages/HomePage'
import { Page1 } from './Days/Day-3/Page1'
// import { HomePage } from './Days/Day-4/Pages/HomePage'
// import { Homepage5 } from './Days/Day-5/Pages/Homepage5'
import { DemoPage } from './Days/Day-6/Pages/DemoPage'


function App() {
 
  return (
    <>
      <DemoPage/>
    {/* <Page1/> */}
      {/* <Homepage5/> */}
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
