import { useState } from "react"
function randomChoice(arr){
    const idx=Math.floor(Math.random()*arr.length);
    return arr[idx];
}
export default function ColorBox({colors}){
    const getRandIdx=()=>Math.floor(Math.random()*colors.length)
    const [color,setColor]=useState(randomChoice(colors))
    const changeColor=()=>setColor(randomChoice(colors))
    return (
        <div onClick={changeColor} style={{width:"100px",height:"100px",backgroundColor:color}}></div>
    )
}