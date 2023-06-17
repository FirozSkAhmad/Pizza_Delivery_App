import React from 'react'
import './pizzaCard.css'
import { addItem, removeItem, deleteItem } from '../utils/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const PizzaCard = ({ data }) => {

    const { imageId, name, id } = data

    const items = useSelector(store => store.cart.items)

    const dispatch = useDispatch()

    const addToCartHandler = (data) => {
        dispatch(addItem(data))
    }

    const removeFromCartHandler = (data) => {
        dispatch(removeItem(data))
    }

    const clearItemFromCartHandler = (data) => {
        dispatch(deleteItem(data))
    }


    return (
        <div className='pizzaCard'>
            <div className='aboutPizzaCon'>
                <div className='pizzaImgCon'>
                    <img className='pizzaImg' alt='pizzaImg' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId} />
                </div>

                <h3>{name}</h3>
            </div>
            {items[id] ? <div className='remButton'>
                <h1 onClick={() => removeFromCartHandler(data)}>-</h1>
                <button onClick={() => clearItemFromCartHandler(data)}>
                    Remove from cart
                </button>
                <h1 onClick={() => addToCartHandler(data)}>+</h1>
            </div>
                :
                <div className='addButton' onClick={() => addToCartHandler(data)}>
                    <button >Add to cart</button>
                </div>
            }
        </div>
    )
}

export default PizzaCard
