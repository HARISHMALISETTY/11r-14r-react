import React from 'react'
import { useSelector } from 'react-redux'


export default function CounterDisplay() {

    const count=useSelector((state)=>state.count)

  return (
    <div>
        <h1>{count}</h1>

    </div>
  )
}
