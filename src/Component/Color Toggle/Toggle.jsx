import React, { useState } from 'react'
import style from './toggle.module.css'

function Toggle() {
    const [back,setBack]=useState('white')
    const [text,setText]=useState('black')
    const toggleColor=()=>{
        setBack(back == 'white' ? 'black' : 'white')
        setText(text == 'black' ? 'white' : 'black')
    }
  return (
    <div className={style.center} style={{backgroundColor:back}}>
        <h1 className={style.head} style={{color:text}}>WELCOME TO <br />REAL WORLD...</h1>
        <button 
        className={style.btn} 
        style={{
            color:text,
            backgroundColor:back,
            border:`2px solid ${text}`
            }} 
        onClick={()=>toggleColor()}>
        Toggle To {back=='white' ? 'black':'light'}</button>
    </div>
  )
}
export default Toggle