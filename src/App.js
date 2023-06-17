import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"

import "../index.css"
import PizzasCon from "./components/PizzasCon"
import { Provider, useDispatch } from "react-redux"
import store from "./utils/store"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Cart from "./components/Cart"


const App = () => {

    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        children: [
            {
                element: <PizzasCon />,
                path: '/'
            },
            {
                element: <Cart />,
                path: 'cart'
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)