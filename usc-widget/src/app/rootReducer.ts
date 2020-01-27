import { combineReducers } from "redux";
import { cartSliceReducer } from "../features/cart/cartSlice";
import { i18nSliceReducer } from "../features/i18n/i18nSlice";

export const rootReducer = combineReducers({
    cart: cartSliceReducer,
    i18n: i18nSliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;
