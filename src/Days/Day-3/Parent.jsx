import { useMemo, useState } from "react"
import { Child,MemoizedChild } from "./Child";
export function Parent(){
    const [count,setCount]=useState(0);
    const [items,setItems]=useState([1,2,3])
    const userInfo=useMemo(()=>({name:"Khushi"}),[])
    const expensiveCal=useMemo(()=>{
        console.log("This is Expensive Calculation")
        return items.reduce((sum,item)=>sum+item,0)
    },[items]);
    console.log(expensiveCal)
    return(
        <>
          <div>
            count:{count}
            <MemoizedChild sum={expensiveCal}/>
            <p>Sum of memoized items :{expensiveCal}</p>
            <div className="flex">
            <button className="border-1 m-2 w-30 rounded-sm bg-green-500/20" onClick={()=>setCount(count+1)}>Increment</button><br />
             <button className="border-1 rounded-sm bg-red-500/20 w-30 m-2" onClick={() => setItems([...items, items.length + 1])}>Add Item</button>
            </div>
          </div>
        </>
    )
}