import React from 'react'
import Die from './Die'
import "./Dice.css"
function Dice ({dice,color}) {
  return (
    <section className="Dice">
      {dice.map((d,idx)=>{
        return <Die key={idx} val={d} color={color}/>
      })}
    </section>
  )
}

export default Dice