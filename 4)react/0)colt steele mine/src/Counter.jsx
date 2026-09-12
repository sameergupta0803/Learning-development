import { useState } from "react";
export default function Counter(){
    console.log("Rendered")
    const [count,setCount]=useState(0);
    const addOne=()=>setCount(count+1)
    const addThree=()=>{
        setCount((c)=>c+1)
        setCount((c)=>c+1)
        setCount((c)=>c+1)
    }
    const setToTen=()=>{
        setCount(10)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>set to 10</button>
        </div>
    )
}