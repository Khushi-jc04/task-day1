import photo from "../../../assets/coding.jpg"
import { HeroSection } from "../Component/HeroSection"
import { createContext, useCallback } from "react"
import { Footer } from "../Component/Footer";
import { Formm } from "../Component/Form";
import { useState,useEffect } from "react";
import { MemoizedHeroSection } from "../Component/HeroSection";
import { useRef } from "react";

export const CardData = createContext();
export const MyState=createContext();

export function Homepage5() {
      const [state,setState]=useState(false)
    const [flag, setFlag] = useState(false);
    const data = [
        {
            id: 1,
            logo: "Logo",
            title: "Real-World Impact",
            description: "Your code directly controls physical systems, moving from digital interfaces to tangible results that change how things are made."
        },
        {
            id: 2,
            logo: "Logo",
            title: "Cutting-Edge Tech",
            description: "Work with IoT, edge computing, real-time systems, and digital twins—the most advanced technologies in industry."
        },
        {
            id: 3,
            logo: "Logo",
            title: "High Autonomy",
            description: "Lead technical decisions, architect systems, and solve complex problems with minimal bureaucracy and maximum engineering freedom."
        },

    ]
  

    const flagHandler=useCallback((newValue)=>{
        setFlag(newValue)
    },[]);
    useEffect(() => {
        setTimeout(() => {
            setFlag(true);
        }, 20000)
    }, [])
    return (
        <>
            <CardData.Provider value={data}>
                {
                     flag?
                     <div className="bg-black">
                       <Formm fun={flagHandler}/>
                     </div>:<></>
                }
               <MyState.Provider value={state}>
                <MemoizedHeroSection/>
               </MyState.Provider>
            </CardData.Provider>
            <Footer />
        </>
    )
}