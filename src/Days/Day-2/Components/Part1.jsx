import { use } from "react";
import { useState, createContext, useContext } from "react";
import { userContext } from "../Pages/HomePage";
import { Part2 } from "./Part2";
export function Part1(){
  const count=useContext(userContext)
    return (
        <>
          <div className="p-25">
            <h1 className="text-5xl font-bold place-self-center">Design. Collabrate. Release.</h1>
            <p className="place-self-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nemo omnis nulla! Enim, voluptates corrupti fuga officiis dolores vero atque? Perferendis sunt repellat vitae enim dicta commodi. Earum, nobis ut.
            </p>
            {/* <p>{`count is set to ${count}`}</p> */}
             <Part2/>
          </div>
        </>
    )
}