import React, { useEffect, useState } from 'react'
import '../App.css'
import {add , remove} from '../reducer/Slice'
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const[target, setState]= useState([]);
    const dispatch= useDispatch();

    useEffect( () => {
        async function fetchData(){
        const res= await fetch("https://fakestoreapi.com/products")  
        const data= await res.json();
        console.log(data);
        setState(data);
        }
        fetchData();
    }, []
    )


    const addProd= (product)=>{
        dispatch(add(product));
    }
  return (
    <div className='box'>
        {target.map((tar)=> (
            <div className='block' key={tar.id}>
            <img className='imag' src= {tar.image} alt="prod" />
            <h4>{tar.title}</h4>
            <h5>{tar.price}</h5>
            <button onClick={()=> addProd(tar)}>Add to Cart</button>

            </div>
        ))}
    </div>
  )
}
