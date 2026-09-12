import { useState } from "react";
export default function ToggleCounter(){
    const [isHappy,setIsHappy]=useState(true);
    const [count,setCount]=useState(0);
    const toggleIsHappy=()=>setIsHappy(!isHappy)
    const incrementCount=()=>setCount(count+1)
    return (
        <div>
            <p onClick={toggleIsHappy}>{isHappy?"😀":"🙁"}</p>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}