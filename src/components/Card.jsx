export function Card(){
   const data = [{
      name: "khushi",
      class: "Mca"
    },
    {
      name: "Priyanka",
      class: "Mca"
    },
    {
      name: "Mahak",
      class: "Mca"
    },
    {
      name: "Jiya",
      class: "Mca"
    },
    ]
    // console.log(props.info)
    // console.log(name)
    return(
        <>
        <div className="flex">

          {data.map((item, index) => (   
       <div className=" text-blue-500 font-bold w-50 m-4 max-w-80 h-40 border-4 border-blue-500/18 rounded-md shadow-xl text-center ">       
         <header>This is Card</header>
         <h3>{item.name}</h3>
         <h3>{item.class}</h3>
       </div>
            ))}
        </div>
        </>
    )
}