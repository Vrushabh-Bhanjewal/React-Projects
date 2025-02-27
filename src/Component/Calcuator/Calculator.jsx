import React, { useState } from 'react'
import style from './calculator.module.css'
import { FaBackspace } from "react-icons/fa";

function Calculator() {
  
  const [value,setValue] = useState('')

  const display=(data)=>{
    setValue(value+data)
  }
  const clear=()=>{
    setValue('')
  }
  
  const calculate=()=>{
    setValue(eval(value))
  }
  const lastRemove=()=>{
    setValue(value.slice(0,-1))
  }

  return (
    <div className={style.bg}>
        <div className={style.calc}>
            {/* <input className={style.inp} type="text" /> */}
            <div className={style.inp}> {value}</div>
            <div onClick={()=>clear()}>AC</div>
            <div onClick={()=>display('%')}>%</div>
            <div onClick={()=>lastRemove()} className={style.back}><FaBackspace /></div>
            <div onClick={()=>display('/')}>/</div>
            <div onClick={()=>display('7')}>7</div>
            <div onClick={()=>display('8')}>8</div>
            <div onClick={()=>display('9')}>9</div>
            <div onClick={()=>display('*')}>*</div>
            <div onClick={()=>display('4')}>4</div>
            <div onClick={()=>display('5')}>5</div>
            <div onClick={()=>display('6')}>6</div>
            <div onClick={()=>display('-')}>-</div>
            <div onClick={()=>display('1')}>1</div>
            <div onClick={()=>display('2')}>2</div>
            <div onClick={()=>display('3')}>3</div>
            <div onClick={()=>display('+')}>+</div>
            <div onClick={()=>display('00')}>00</div>
            <div onClick={()=>display('0')}>0</div>
            <div onClick={()=>display('.')}>.</div>
            <div onClick={()=>calculate()}>=</div>
        </div>
    </div>
  )
}

export default Calculator