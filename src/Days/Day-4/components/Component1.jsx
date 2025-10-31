import student from "../../../assets/Student.jpg"
import { Link } from "react-router-dom"
export function Component1() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="place-self-center p-15 md:20 lg:p-26 md:max-w-170 md:w-110 lg:w-170">
                    <div className="md:text-8xl text-2xl font-serif flex flex-col font-semibold justify-center">
                        <span className="text-green-800">
                            This is
                        </span>
                        <span className="text-yellow-300">
                         Carolina!
                        </span>
                    </div>
                    <div className="">
                        <p className="">
                      College of Arts and Science in Columbia, South Carolina. Infinite possibilities and your promising future start here!
                        </p>
                    </div>
                    <div className="flex gap-5 py-5">
                      <button className="border-1 rounded-md p-2 bg-green-800 text-white">
                        Login
                      </button>
                      <button className="border-1 rounded-md p-2 bg-green-800 text-white">
                        Signup
                      </button>
                    </div>
                </div>
                <div className="md:ml-auto md:max-w-140 w-full md:w-70 lg:w-200 md:100">
                    <img src={student} className="h-70 w-80 place-self-center w-40 md:h-170 md:w-165" alt="image" />
                </div>
            </div>
        </>
    )
}