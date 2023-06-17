import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            state.items[action.payload.id] ? state.items[action.payload.id].qty += 1 : state.items = Object.assign(state.items,
                {
                    [action.payload.id]: {
                        qty: 1,
                        info: action.payload
                    }
                })
        },
        removeItem: (state, action) => {
            state.items[action.payload.id].qty === 1 ? delete state.items[action.payload.id] : state.items[action.payload.id].qty -= 1
        },
        deleteItem: (state, action) => {
            delete state.items[action.payload.id]
        }
    }
})

export const { addItem, removeItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer
