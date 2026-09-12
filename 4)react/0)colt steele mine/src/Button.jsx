import React from 'react'
import "./Button.css"
export default function Button({label="Click Me",clickFunc}) {
  return (
    <button className="Button" onClick={clickFunc}>{label}</button>
  )
}
