import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Meal.module.css'

const Mealitem=({current})=>{
    return(<li key={current.idMeal} className={style.item}>
        <p>{current.strMeal}</p>
        <figure>
            <img src={current.strMealThumb} alt={current.strMeal} />
        </figure>
    </li>)
}

function Mealdata() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').
        then(res=>{
            console.log(res.data.meals)
            setData(res.data.meals)
        }).catch(err=>console.log(err))
    }
    ,[])

  return (
    <div>
        <h1 className={style.title}>{data.length != 0 ? "Menu Card":'Loading'}</h1>
        <ul className={style.card}>{
             data.map(curr=>{
                return <Mealitem current={curr}/>
             })   
        }</ul>
    </div>
  )
}

export default Mealdata