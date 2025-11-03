import photo from "../../../assets/coding.jpg"
import { LowerScreen } from "./LowerScreen"
export function HeroSection(){
    return(
        <>
           <div className="md:flex bg-white w-screen bg-cover w-full"
            style={{ backgroundImage: `url(${photo})` }}>
            <div className="md:w-1/2  md:p-20 p-2 md:font-bold md:my-20 md:overflow-hidden">
                  <div className="md:text-6xl font-bold text-4xl m-4">
                    <span className="text-orange-500">
                    Where code 
                    </span>
                    <br />
                    <span className="text-blue-500">
                    Controls Reality
                    </span>
                  </div>
                  <div className="text-white m-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos dignissimos tenetur reiciendis. Dicta veritatis corporis at assumenda molestias beatae quidem mollitia dolor, deserunt commodi necessitatibus accusamus voluptate libero veniam?
                  </div>
                  <div>
                    <div className="md:flex m-4">
                    <button className="w-full md:w-50 bg-blue-500 my-3 p-2 rounded-md">Apply Now</button>
                    <button className="bg-transparent text-orange-500 md:w-70 w-full font-bold border-1 border-white md:mx-3 rounded-md p-1">Free Simulation Software</button>
                    </div>
                  </div>
            </div>
            <div className="w-1/2">

            </div>

           </div>
            <LowerScreen/>
        </>
    )
}