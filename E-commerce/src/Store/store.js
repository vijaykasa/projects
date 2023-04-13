import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from './cartSlice.js'

const store=configureStore({
    reducer:{
        cartProduct:cartReducer,
    }
    
})

export default store