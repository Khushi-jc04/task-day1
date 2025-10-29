import { Navbar } from "../Components/Navbar"
import { HeroSection } from "../Components/HeroSection"
import { createContext, useEffect, useState } from "react"
import { VisitingPage } from "../Components/VisitingPage";
import { Modal } from "../Components/Modal";
import { useRef } from "react";
import { useContext } from "react";
import { createRoot } from 'react-dom/client';
export const userContext=createContext();
export function HomePage(){
  const [count,setCount]=useState(1);
  const [flag,setFlag]=useState(false);
  const [comment,setComment]=useState("Leave your Comment")
  const inputRef=useRef(null);
  useEffect(()=>{
    setTimeout(()=>{
       setFlag(true);
    },2000)
  },[])

  const flagHandler=(newValue)=>{
    setFlag(newValue);
  }
  const handleChange=(e)=>{
    setComment(e.target.value)
  }
  useEffect(()=>{
    inputRef.current.style.color="blue";
  },[comment])
    return(
        <>
        
          <Navbar/>
          <userContext.Provider value={count}>

          <HeroSection/>
          {flag?
          <Modal fun={flagHandler}/>
          
          :<></>}
        </userContext.Provider>
          <div className="place-self-center ">

          <textarea ref={inputRef} name="comment" value={comment} rows={4} cols={20} onChange={handleChange} className="border-1"></textarea>
          </div>
        </>
    )
}