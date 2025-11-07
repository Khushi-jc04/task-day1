import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export function Navbar() {
    const navigate=useNavigate()
    const [navOpen,setNavOpen]=useState(false)
    const handleNav=()=>{
        setNavOpen(!navOpen)
    }
    const handleLogout=()=>{
        localStorage.setItem('isLoggedin',false)
        navigate("/")
    }
    return (
        <>
            <header>
                <div className="md:flex border-b-1 border-gray-200">
                    <div>
                        <img src="	https://freezecar.click/static/logo.png?v=1738047244" alt="Logo" className='md:w-50 w-20' />
                    </div>
                    <div className="md:flex md:mx-auto place-self-center relative bottom-4 md:top-1">
                            <input type="search" name="" id="" className='box-shadow bg-gray-200 md:place-self-center md:w-150 md:p-3 ' />
                            <button className='relative md:right-10 right-7 top-1'>
                                <FaSearch />
                            </button>
                      
                    </div>
                    <div className='md:flex place-self-center ml-auto '>
                        <p className='md:block hidden md:text-xl font-bold place-self-center'>My cart</p>
                        <FaShoppingCart className='md:w-15 md:place-self-center w-20 absolute right-1 top-5 md:right-17 md:top-7'/>
                    </div>
                </div>
                <nav className='md:m-3 m-2'>
                    <div className='hidden md:m-2 md:block md:flex'>
                        <ul className='md:flex md:gap-5 md:font-bold'>
                            <li>Home</li>
                            <li>Best Sellers</li>
                            <li>New Arrivals</li>
                            <li>Hot Sale</li>
                            <li>Shopping Cart</li>
                        </ul>
                        <button className='md:ml-auto bg-blue-500 md:p-3 rounded-lg font-bold'
                         onClick={handleLogout}
                        >Logout</button>
                    </div>
                    <div className='md:hidden'>
                          <FaBars onClick={handleNav}/>  
                          {
                            navOpen?<div>
                                <ul className='font-bold'>
                            <li>Home</li>
                            <li>Best Sellers</li>
                            <li>New Arrivals</li>
                            <li>Hot Sale</li>
                            <li>Shopping Cart</li>
                            </ul>
                             <button className='p-2 bg-blue-500 rounded-lg'
                         onClick={handleLogout}
                        >Logout</button>
                            </div>:
                            <></>
                          }
                    </div>
                </nav>
            </header>
        </>
    )
}