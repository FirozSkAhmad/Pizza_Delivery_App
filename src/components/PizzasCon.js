import React, { useEffect, useState } from 'react'
import './pizzasCon.css'
import PizzaCard from './PizzaCard'


const PizzasCon = () => {

    const [pizzasData, setPizzasData] = useState([])

    useEffect(() => {
        getPizzasData()
    }, [])

    const getPizzasData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=28768&submitAction=STORED_SEARCH")
        const json = await data.json()
        setPizzasData(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

    }


    return (
        <div className='mainCon'>
            <div className='pizzasCon'>
                {pizzasData.length > 0 ?
                    pizzasData.map((pizzaData) => <PizzaCard key={pizzaData.card.info.id} data={pizzaData.card.info} />)
                    : null}
            </div>
        </div>

    )
}

export default PizzasCon
