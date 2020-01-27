import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { App, AppProps } from "./app/App";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor } from "redux-persist/es/types";
import { Loading } from "./components/Loading";

export const renderWidget = (
    container: HTMLElement,
    props: AppProps,
    store: Store,
    persistor: Persistor
) => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <App {...props} />
            </PersistGate>
        </Provider>,
        container
    );
};
