import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordersAmount: 5,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addAmount(state, action) {
            state.ordersAmount += action.payload
        },
     
     
    
        
    }
})

export const { addAmount, addOrderList, clearList, spliceList } = orderSlice.actions
export default orderSlice.reducer