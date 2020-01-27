import {
    configureStore,
    EnhancedStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist/es/constants";
import { rootReducer, RootState } from "./rootReducer";
import { Persistor } from "redux-persist/es/types";

export const initStore = (): {
    store: EnhancedStore<RootState>;
    persistor: Persistor;
} => {
    const store = configureStore({
        reducer: persistReducer(
            {
                key: "usc-state",
                storage
            },
            rootReducer
        ),
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
    });
    const persistor = persistStore(store);

    return { store, persistor };
};
