import photo from "../../../assets/login.jpeg"
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { Route,Routes } from "react-router-dom";
import { ProfilePage } from "./ProfilePage";
export function DemoPage(){
    return(
        <>
        <div className="p-5 bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600" >
            <div className="w-full">
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            </div>
            {/* <div className="w-1/2">
                   <img src={photo} alt="image" className="md:w-200 md:h-185"/>
            </div> */}
        </div>
        </>
    )
}