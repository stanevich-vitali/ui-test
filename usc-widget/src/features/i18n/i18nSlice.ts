import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO: Find a way to share common interfaces with outlet project.
export interface I18n {
    PRODUCT_DETAILS_TAB: {
        TAB_NAME: string;
    };
}

const i18nSlice = createSlice({
    name: "i18n",
    initialState: null as I18n | null,
    reducers: {
        initialize(state, action: PayloadAction<I18n>) {
            return action.payload;
        }
    }
});

export const { initialize } = i18nSlice.actions;
export const i18nSliceReducer = i18nSlice.reducer;
