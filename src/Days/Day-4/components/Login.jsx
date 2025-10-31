export function Login() {
    return (
        <>
            <div className="place-center-self md:p-10 rounded-lg lg:p-5 p-17 ">
                <form className="place-self-center border-1 flex-col md:p-2 md:h-80">
                    <h1 className="place-self-center text-green-800 text-2xl m-2 p-2">Login Form</h1>
                    <input type="email" placeholder="Enter email" className="border-1 m-2 p-1 md:p-2 md:m-4 rounded-sm" /><br/>
                    <input type="password" name="password" id="pasword" className="border-1 m-2 p-1 md:p-2 md:m-4 rounded-sm" /><br />
                    <button type="submit" className="bg-green-800 text-white place-self-center border-1 md:p-1 my-5 md:w-50 mx-8 rounded-sm w-50">Login</button>
                </form>
            </div>
        </>
    )
}