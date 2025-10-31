import "./reusable.css"
export function ReusableComp({data}){
    return(
        <>
        {console.log(data.image)}
        <div id="card" className="">
            <div id="left">
                <div id="heading">
               {data.Title}
                </div>
                <div id="desc">
                     {data.Description}
                </div>
            </div>
            <div id="right">
                <img src={data.image} alt="image"/>
            </div>
        </div>
        </>
    )
}