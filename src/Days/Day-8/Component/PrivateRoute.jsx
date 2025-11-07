import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export function PrivateRoute(){
    const navigate=useNavigate()
    useEffect(()=>{
        const isLoggedin=localStorage.getItem('isLoggedin')
           if(isLoggedin==='false')
            {
                navigate("/")
            }
    },[])
    return(
        <Outlet/>
    )
}