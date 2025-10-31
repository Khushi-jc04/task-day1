export function NavBar() {
    return (
        <>
            <nav className="flex flex-wrap  bg-green-800 p-3 text-white w-full justify-between">
                <div className="m-1 flex-wrap flex">
                    <img src="https://res2.weblium.site/res/5f05a781c91c5b00229bcef4/5f1162dec3ffc600210d627c?nowebp" alt="image" className="lg:h-20 h-10" />

                </div>
                <div className="md:hidden ml-auto place-self-center">
                    <svg
                        xmlns="<http://www.w3.org/2000/svg>"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block ml-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => {
                            menu.classList.toggle('hidden')
                        }}

                    >
                        <path
                            // stroke-lineCap="round"
                            // stroke-lineJoin="round"
                            // stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <div className="hidden ml-auto place-self-center" id="menu">

                    <ul className="md:flex gap-5 text-white-500 font-bold text-lg">
                        <li className="hover:text-yellow-300">About us</li>
                        <li className="hover:text-yellow-300">Acadmic</li>
                        <li className="hover:text-yellow-300">Campus Life</li>
                        <li className="hover:text-yellow-300">News</li>
                        <li className="hover:text-yellow-300">Contact</li>
                    </ul>
                </div>
                    
                </div>
                <div className="hidden md:flex ml-auto place-self-center" >

                    <ul className="md:flex gap-5 text-white-500 font-bold text-lg" id="nav">
                        <li className="hover:text-yellow-300">About us</li>
                        <li className="hover:text-yellow-300">Acadmic</li>
                        <li className="hover:text-yellow-300">Campus Life</li>
                        <li className="hover:text-yellow-300">News</li>
                        <li className="hover:text-yellow-300">Contact</li>
                    </ul>
                </div>
            </nav>
        </>

    )
}