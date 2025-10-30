import { useState } from "react"
import { TryButton } from "./TryButton"
import { useContext } from "react";
import { userContext } from "../Pages/HomePage";
export function Part2(){
    const count=useContext(userContext)
    const [email,setEmail]=useState("");
    const handleChange=(e)=>{
        setEmail(e.target.value)
    }
    return(
        <>
         <div className="place-self-center flex">
            <input type="email" value={email} onChange={handleChange} placeholder="Enter email" className="border-1 border black-500 m-2 p-1"/>
            <TryButton/>
         </div >
            <div className="place-self-center flex">
                {email}
            </div>
            <p>{`count is set to ${count}`}</p>
        </>
    )
}