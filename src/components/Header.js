import "./header.css"
import { Link } from "react-router-dom"
import userIcon from '../utils/icons/userIcon.png'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from "react-redux"

const Header = () => {

    const items = useSelector(store => store.cart.items)

    const keys = Object.keys(items)

    const totalItems = keys.reduce((acc, cur) => {
        acc += items[cur].qty
        return acc
    }, 0)


    return (
        <div>
            <div className="header">
                <div className="AppNameCon">
                    <h1>Pizza's</h1>
                </div>
                <div className="userCon">
                    <Link to='cart' className="cartCon">
                        <BsFillCartFill size={30} />
                        <div className="countCon">{totalItems}</div>
                    </Link>
                    <img className="userIcon" alt="userIcon" src={userIcon} />
                </div>
            </div>
        </div>
    )
}

export default Header