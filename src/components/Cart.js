import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../reducer/Slice'
export const Cart = () => {
  const savedItem= useSelector((state)=> state.cart);
  const dispatch= useDispatch();

  const handleRemove= (it)=> {
    dispatch(remove(it));
  }
  console.log(savedItem);
  return (
    <div>
      <h3>Cart</h3>
      <div className='box'>
      {savedItem.map((item)=> (
        <div key={item.id}>
          <img src={item.image} alt="hg" />
          <h5>{item.title}</h5>
          <h5>{item.price}</h5>
          <button onClick={() => handleRemove(item.id)} >Remove Item</button>
        </div>
      
      ))}
      </div>
    </div>
  )
}
