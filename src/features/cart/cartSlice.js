const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    cart : [],
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{

    }
});

export default cartSlice.reducer