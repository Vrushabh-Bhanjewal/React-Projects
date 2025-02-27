import React, { useState } from 'react'
import style from './counter.module.css'

function Counter() {
    const [count,setCount] =useState(0)
    const handleInc=()=>{
        if (count >= 10){
            return
        }
        setCount((prev)=>prev+1)
    }
    const handleDec=()=>{
        if (count <= 0){
            return
        }
        setCount((prev)=>prev-1)
    }
  return (
    <div className={style.center}>

        <div className={style.container}>
        <h1>Counter : {count}</h1>
        <button className={style.btn} onClick={handleInc}>Increment</button>
        <button className={style.btn} onClick={handleDec}>Decrement</button>
        </div>    

    </div>
  )
}

export default Counter
