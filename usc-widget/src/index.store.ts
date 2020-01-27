import { EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "./app/rootReducer";

export type WidgetStore = EnhancedStore<RootState>;
export { Persistor as WidgetPersistor } from "redux-persist";
export { initStore } from "./app/store";
export { initialize as initializeI18n } from "./features/i18n/i18nSlice";
