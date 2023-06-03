import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  const item= useSelector((state)=> state.cart)
  return (
    <div className="nav">
        <span className="name">Redux</span>
        <div className="home">
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <span>Total Items: {item.length} </span>
        </div>        
    </div>
  )
}
