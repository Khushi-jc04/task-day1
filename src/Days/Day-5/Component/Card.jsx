
export function Card({data}){
    console.log(data)
    console.log("inside carsd")
    return(
        <>
        <div className="m-4 border-3 border-green text-white p-6 rounded-md">
            <div>
                {data.logo}
            </div>
            <div>
                <p className="font-bold text-2xl">
                    {data.title}
                </p>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
        </>
    )
}