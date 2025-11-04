import Card from "./Card"
import { CardData } from "../Pages/Homepage5"
import { useContext } from "react"
import { useMemo } from "react"
import React from "react"

export function LowerScreen() {
    const data = useContext(CardData)
    const memoizedCards = useMemo(() => {
        return data.map((item) => (
            <Card key={item.id} data={item} />
        ))
    }, [data])
    return (
        <>
            {/* {console.log("inside LowerSEction")} */}
            <div className="bg-black w-full">
                <div>
                    <div className="md:text-6xl place-self-center font-bold text-3xl">
                        <span className="text-white my-3">Why </span>
                        <span className="text-blue-500 my-3">Industrial
                            Tech ?</span>
                    </div>
                    <div className="text-gray-500 m-3 p-2 place-self-center text-center">
                        Transform from building apps to building the future. Your code doesn't just run in browsers—it controls robots, optimizes factories, and shapes the physical world.
                    </div>
                </div>
                <div className="md:flex md:gap-5 m-5">
                    {memoizedCards}
                </div>
            </div>
        </>
    )
}