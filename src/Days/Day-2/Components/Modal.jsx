export function Modal(setFlag){
  console.log(setFlag)
  const handleClick=()=>{
    console.log("IOnside button click")
            setFlag.fun(false);
  }
    return(
        <>
           {/* <h1>Thanks for visiting</h1> */}
           <div id="myModal" className="fixed inset-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto z-10">
    <div className="flex justify-between items-center mb-4">
      <button id="closeModalBtn" className="text-gray-500 hover:text-gray-700 text-2xl leading-none" onClick={handleClick}>&times;</button>
    </div>
    <p className="text-gray-700 mb-4 font-bold text-size-10">Thanks for visiting</p>
    
  </div>
            </div>
        </>
    )
}