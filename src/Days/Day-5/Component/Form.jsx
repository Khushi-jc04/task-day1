export function Formm(setFlag) {
    console.log(setFlag)
    return (
        <>
            <div id="myModal" className="fixed inset-0 flex items-center justify-center text-white ">
                <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
                <div className="bg-black md:w-150 rounded-lg shadow-xl md:p-6  md:20 w-80 mx-auto z-10 h">
                    <div className="flex justify-between items-center mb-4">
                        <button id="closeModalBtn" className="ml-auto ext-gray-500 hover:text-gray-700 text-2xl leading-none" onClick={() => {
                            setFlag.fun(false)
                        }}>&times;</button>
                    </div>
                    <form action="" className="m-2">
                        <h1 className="font-bold text-2xl m-2">Start your Career</h1>
                        <p>
                            Help us build the future where code controls reality
                        </p>
                        <div className="md:flex m-2">
                            <div className="m-2">
                                <label htmlFor="">Full Name*</label><br />
                                <input type="text" name="fullName" placeholder="Jhon Smith" className="border-1 borde-white rounded-md p-2 m-2" />
                            </div>
                            <div className="m-2">
                                <label htmlFor="email">Email*</label><br />
                                <input type="email" name="email" placeholder="john@example.com" className="border-1 borde-white rounded-md p-2 m-2" />
                            </div>
                        </div>
                        <div className="m-2">
                            <label htmlFor="profileLink">GitHub/LinkedIn Profile
                            </label><br />
                            <input type="text" name="profileLink" placeholder="Github link profile" className="border-1 borde-white rounded-md p-2 m-2" />
                        </div>
                        <div className="m-2">
                            <label htmlFor="feedback">Why does industrial automation excite you?*</label><br />
                            <textarea name="feedback" id="" row={4} col={10} className="border-1 border-white p-2 m-2"></textarea>
                        </div>
                        <div className="flex">
                            <button className="bg-blue-500 rounded-sm p-2 m-3">
                                Submit Appliaction
                            </button>
                            <button className="border-1 border-white p-2 m-3 rounded-md">
                                Cancel
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}