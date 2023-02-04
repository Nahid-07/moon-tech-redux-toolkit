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
        }
    }
});
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer