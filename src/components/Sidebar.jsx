import React from "react"
import "./sidebar.css"
export function Sidebar(){
return(
    <>
      <div className={`fixed inset-y-0 left-0 w-60 bg-blue-500/18  text-blue-500/80 p-5`}>
        <div className="flex">
         {/* <p>logo</p> */}
        <h1 className="justify-center mx-9 font-bold ">
            LOGO
        </h1>
        </div>
        <nav className="my-5 font-semibold ">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About us</li>
                <li>features</li>
                <li>Logout</li>
            </ul>
        </nav>
      </div>
    </>
)
}