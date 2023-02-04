const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    cart : [],
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        addToCart : (state,action)=>{
            const selecteProduct = state.cart.find( product => product._id === action.payload._id );
            if(!selecteProduct){
                const product = {...action.payload , quantity : 1}
                state.cart.push(product)
            }else{
                selecteProduct.quantity += 1
                state.cart.filter(product => product._id !== selecteProduct._id).push(selecteProduct)
            }
        },
        removeFromCart : (state, action) =>{
            console.log(state.cart)
            console.log(action)
            if(action.payload.quantity > 1){
                const product = {
                    ...action.payload,
                    quantity : action.payload.quantity - 1
                }
                state.cart=state.cart.filter(product => product._id !== action.payload._id);
                state.cart.push(product)
            }else{
                state.cart=state.cart.filter(product => product._id !== action.payload._id);
            }
        }
    }
});
export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer