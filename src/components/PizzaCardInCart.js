import React from 'react'
import './pizzaCardInCart.css'

const PizzaCardInCart = ({ data }) => {

    console.log(data)

    const {imageId,name,description}=data


    return (
        <div className='PizzaCardConInCart'>
            <div className='pizzaImgConInCart'>
                <img className='pizzaImgInCart' alt='pizzaImg' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId} />
            </div>
            <div className='aboutConInCart'>
                <h1>{name}</h1>
                <h1>{description}</h1>
                <button></button>
            </div>
        </div>
    )
}

export default PizzaCardInCart
