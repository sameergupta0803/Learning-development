import React from 'react'
import "./Box.css"
export default function Box({isActive,toggle}) {
  return (
    <div onClick={toggle} className="Box" style={{backgroundColor:isActive?"red":"black"}}></div>
  )
}
