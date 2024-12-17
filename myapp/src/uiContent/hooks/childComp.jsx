import React from 'react'

export default function ChildComp(props) {
  return (

    <div>
    
    <button onClick={props.onClick}>click me</button>
    <h1> {props.value} </h1>
    </div>
  )
}
