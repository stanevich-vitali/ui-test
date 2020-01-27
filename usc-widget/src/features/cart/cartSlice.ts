import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    text: string;
}

export interface CartState {
    products: Product[];
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: []
    } as CartState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const { id, text } = action.payload;
            state.products.push({ id, text });
        }
    }
});

export const { addToCart } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
