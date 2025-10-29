import { TryButton } from "./TryButton"
export function Part2(){
    return(
        <>
         <div className="place-self-center flex">
            <input type="email" placeholder="Enter email" className="border-1 border black-500 m-2 p-1"/>
            <TryButton/>
         </div >
        </>
    )
}