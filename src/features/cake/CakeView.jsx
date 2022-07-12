import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>numOfCakes = {numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(2))}>Restock Cakes</button>
    </div>
  )
}