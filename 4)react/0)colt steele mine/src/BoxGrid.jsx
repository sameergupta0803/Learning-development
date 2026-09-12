import { useState } from "react"
import Box from "./Box"
export default function BoxGrid() {
  const [boxes,setBoxes]=useState(Array(9).fill(false))
  const resetBoxes=()=>{
    setBoxes(Array(9).fill(false))
  }
  const toggleBox=(idx)=>{
    setBoxes(oldBoxes=>{
      return oldBoxes.map((b,oldIdx)=>{
        if(oldIdx==idx)return !b
        else return b
      })
    })
  }
  return (
    <div>
      {boxes.map((b,idx)=>{
        return <Box key={idx} isActive={b} toggle={()=>toggleBox(idx)}/>
      })}
      <button onClick={resetBoxes}>reset</button>
    </div>
  )
}
