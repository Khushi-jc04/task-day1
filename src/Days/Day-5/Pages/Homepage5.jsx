import photo from "../../../assets/coding.jpg"
import { HeroSection } from "../Component/HeroSection"
import { createContext } from "react"
import { Footer } from "../Component/Footer";
export const cardData = createContext();
import { Formm } from "../Component/Form";
import { useState,useEffect } from "react";
export function Homepage5() {
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
    const flagHandler = (newValue) => {
        setFlag(newValue);
    }
    useEffect(() => {
        setTimeout(() => {
            setFlag(true);
        }, 2000)
    }, [])
    return (
        <>
            <cardData.Provider value={data}>
                {
                     flag?
                     <div className="bg-black">
                       <Formm fun={flagHandler}/>
                     </div>:<></>
                }
                <HeroSection />
            </cardData.Provider>
            <Footer />
        </>
    )
}