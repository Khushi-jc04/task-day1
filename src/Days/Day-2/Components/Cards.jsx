export function Cards({ data }) {
    return (
        <>
            {console.log(data)}
            <div className="flex flex-wrap gap-15 place-self-center m-10">

                {
                    data.map((item, key) => (
                        <div key={key} className="border-1 p-4 font-bold">
                            <div className="bg-red-500/10 h-25">
                              
                            </div>
                            <div>
                                {item.caption}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}