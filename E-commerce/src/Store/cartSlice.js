import { createSlice } from '@reduxjs/toolkit'

const defaultstate={
    cartItems:[],
    cartTotal:0,
    Quantity:0

}
export const cartSlice=createSlice({
    name:"cart",
    initialState:defaultstate,
    reducers:{
        addItem:(state,  action)=>{
            console.log(state)
            const existItem=state.cartItems.find((item)=> item.id === action.payload.id)
            if(existItem){
                state.cartItems.forEach((item,i) =>{
                      if(item.id === action.payload.id){
                        state.cartItems[i].quantity+=1
                      }
                })  
            }else{
                const temp={...action.payload, quantity:1}
                state.cartItems.push(temp)
            }
        },
        totalprice:(state,action)=>{
            let totalAmount=state.cartItems.reduce((cartTotal,cartitem)=>{
               const {quantity , price}=cartitem;
               const itemtotal=price*quantity;

               return cartTotal+=itemtotal;

            },0)
            state.cartTotal=totalAmount
        },
        totalquantity:(state,action)=>{
            let totalQuantity = state.cartItems.reduce((cartQuantity,cartItem)=>{
                const {quantity}=cartItem;
                return cartQuantity+=quantity
            },0)
            state.Quantity = totalQuantity
        }
    }

})
export const { addItem,totalprice,totalquantity } = cartSlice.actions
export default cartSlice.reducer