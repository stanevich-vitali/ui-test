import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./app/App";
import { initStore } from "./app/store";
import { Loading } from "./components/Loading";
import { initializeI18n } from "./index.store";
import i18n from "./i18n.en.dev.json";

const WIDGET_PROPS = {
    view: "N/A",
    scu: "N/A",
    theme: "N/A",
    lang: "N/A",
    scus: []
};

const { store, persistor } = initStore();
// TODO: finde a way to share assets with outlet
store.dispatch(initializeI18n(i18n));

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <App {...WIDGET_PROPS} />
        </PersistGate>
    </Provider>,
    document.querySelector("#root")
);
