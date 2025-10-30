import { Part1 } from "./Part1"
import { Part2 } from "./Part2"
import { Cards } from "./Cards"
import { useState, createContext, useContext } from "react";
import { userContext } from "../Pages/HomePage";
export function HeroSection(){
  const count=useContext(userContext);
  const data=[{
    id:1,
    caption:"For Designing"
  },
   {
    id:2,
    caption:"For Collabration"
   },
   {
    id:3,
    caption:"For Production"
   },
   {
    id:4,
    caption:"For Invention"
   }
]
    return(
        <>
        <div className="">
          {console.log(count)}
            <h1>{`Count is set to ${count}`}</h1>
            <Part1/>
            {/* <Part2/> */}
            <Cards data={data}/>
        </div>
          
        </>
    )
}