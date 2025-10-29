import { Navbar } from "../Components/Navbar"
import { HeroSection } from "../Components/HeroSection"
import { useEffect, useState } from "react"
import { VisitingPage } from "../Components/VisitingPage";
import { Modal } from "../Components/Modal";
export function HomePage(){
  const [count,setCount]=useState(1);
  const [flag,setFlag]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
       setFlag(true);
    },2000)
  },[])
  const flagHandler=(newValue)=>{
    setFlag(newValue);
  }
    return(
        <>
          <Navbar/>
          <HeroSection/>
          {flag?
          <Modal fun={flagHandler}/>
          // <h1>you have visited it once</h1>
          :<></>}
        </>
    )
}