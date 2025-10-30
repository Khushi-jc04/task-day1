import React from "react"
export function Child({sum}){
    return(
        <>
        <h1>{sum}</h1>
        {console.log("child component reRendered")}
        </>
    )
}
export const MemoizedChild=React.memo(Child)