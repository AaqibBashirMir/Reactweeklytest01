import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <>
       <button id={props.id} onClick={props.onClick}>{props.name}</button>
    </>
  )
}

export default Button
