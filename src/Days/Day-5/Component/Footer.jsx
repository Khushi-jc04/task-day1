import { useRef } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { MyState } from "../Pages/Homepage5"

export function Footer() {
  const buttonRef = useRef(null)
  const state = useContext(MyState)
  console.log(state)

   const handleScroll = () => {
     if (buttonRef.current) {
      buttonRef.current.focus()
    }
  }; 
  return (
    <>
      <div className="bg-orange-400 p-4">

        <div className="md:text-5xl text-white place-self-center font-bold">
          Ready to Build the <span className="text-blue-500">Future ?</span>
        </div>
        <div className="text-white place-self-center">
          Join a team where your code doesn't just run in browsers—it runs factories, controls robots, and shapes the physical world around us.
        </div>
        <div className="place-self-center m-5">
          <button className="w-full md:w-50 bg-blue-500 p-3 rounded-md" ref={buttonRef} onClick={() => {

          }}>Start Your Application</button>
        </div>
      </div>
    </>
  )
}