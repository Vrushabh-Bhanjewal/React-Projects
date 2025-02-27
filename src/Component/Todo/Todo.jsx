import React, { useState } from 'react'
import style from './todo.module.css';

const Item=({curr,remove})=>{

    return(
    <li className={style.item}>
        {curr.data} 
        <button className={style.rmBtn} onClick={()=>remove(curr.id)} >Remove</button> 
    </li>)
}

function Todo() {
    const [todo,setTodo] = useState([])
    const [inp,setInput] = useState('')

    const getId=()=>{
        return Math.floor(Math.random()*10000)
    }
    const handleAdd=()=>{
        if(inp=='') return
        let a= todo.find(curr=>curr.data==inp)
        if(a) {
            setInput('')
            return
        }
        setTodo((prev)=>[...prev,{data:inp,id:getId()}])
        // console.log(todo)
        setInput('')
    }
    const handleRemove=(rm)=>{
        setTodo(todo.filter(curr=>curr.id!=rm))
    }
    
  return (
    <div className={style.center}>
        <div className={style.container}>
            <h1 >Todo List</h1>
            <span className={style['inp-box']}>
                <input type="text" value={inp} onChange={(e)=>setInput(e.target.value)}/>
                <button className={style.btn} onClick={()=>handleAdd()}>Add</button>
            </span>
            <ul className={style.list}>
                {
                    todo.map((curr)=>{
                        return <Item key={curr.id} curr={curr} remove={handleRemove}/>
                    })
                }
            </ul>
        </div> 
    </div>
  )
}

export default Todo
