import { Part1 } from "./Part1"
import { Part2 } from "./Part2"
import { Cards } from "./Cards"
export function HeroSection(){
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
            <Part1/>
            <Part2/>
            <Cards data={data}/>
        </div>
          
        </>
    )
}