import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import PizzaCardInCart from './PizzaCardInCart'

const Cart = () => {

    const itemsInCart = useSelector(store => store.cart.items)

    const ids = Object.keys(itemsInCart)

    return (
        <div className='mainConInCart'>
            <div className='cartCon'>
                {ids.length > 0 ? <PizzaCardInCart data={itemsInCart[ids[0]].info} /> : null}
            </div>
        </div>

    )
}

export default Cart
