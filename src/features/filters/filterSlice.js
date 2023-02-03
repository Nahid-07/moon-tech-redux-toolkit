const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    
    stock: false,
    brand : [],
    keyword : ""
}

const filterSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{

    }
});

export default filterSlice.reducer