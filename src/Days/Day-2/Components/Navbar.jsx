import { TryButton } from "./TryButton"
export function Navbar() {
    return (
        <>
            <nav className="">
                <div className="flex">
                    <a href="https://flowbite.com/" className="flex space-x-3 m-2">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="font-semibold dark:text-black">Flowbite</span>
                    </a>
                    <div className="flex mx-10">
                        <ul className="w-full flex">
                            <li>
                                Solutions
                            </li>
                            <li>Merge</li>
                            <li>Example</li>
                            <li>EnterPrise</li>
                            <li>Pricing</li>
                            <li>Resources</li>
                            <li>open FlowBeat</li>
                        </ul>
                    </div>
                    <div className="ml-auto mr-3 mt-2">
                        <TryButton/>
                    </div>
                </div>

            </nav>
        </>
    )
}