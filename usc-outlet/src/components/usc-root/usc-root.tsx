import { Component, Element, Host, Method, h } from "@stencil/core";
import { SHOPPING_CART_ROOT } from "../../constants/components.registry";
import { WidgetStore, WidgetPersistor } from "@usc-widget/types/index.store";
import { usc } from "@usc-widget/store.js";
import { getLocaleComponentStrings } from "../../utils/translations";
import { I18n } from "./i18n/usc-root.i18n";
export interface IUscProps {
    theme: string;
    lang: string;
    view: string;
    scu: string;
    scus: string[];
}

@Component({
    tag: "usc-root",
    shadow: true
})
export class UscRoot {
    @Element() element: HTMLUscRootElement;
    private usc = null;
    private i18n: I18n;
    render() {
        return (
            <Host>
                <div id={SHOPPING_CART_ROOT}></div>
            </Host>
        );
    }

    @Method()
    async renderUsc(
        props: IUscProps,
        store: WidgetStore,
        persistor: WidgetPersistor
    ) {
        const rootEl = this.element.shadowRoot.querySelector(
            `#${SHOPPING_CART_ROOT}`
        );
        if (this.usc) {
            this.renderWidget(rootEl, props, store, persistor);
            return Promise.resolve();
        } else {
            return import("@usc-widget/usc.js").then(({ usc }) => {
                this.usc = usc;
                Object.defineProperty(rootEl, "ownerDocument", {
                    value: this.element.shadowRoot
                });
                (this.element.shadowRoot as any).createTextNode = (
                    data: string
                ) => document.createTextNode(data);
                (this.element.shadowRoot as any).createElement = (
                    data: string,
                    options: ElementCreationOptions
                ) => document.createElement(data, options);
                this.renderWidget(rootEl, props, store, persistor);
            });
        }
    }

    private renderWidget(
        rootEl: Element,
        props: IUscProps,
        store: WidgetStore,
        persistor: WidgetPersistor
    ) {
        store.dispatch(usc.initializeI18n(this.i18n));
        this.usc.renderWidget(
            rootEl,
            { ...props, i18n: this.i18n },
            store,
            persistor
        );
    }

    async componentWillLoad(): Promise<void> {
        this.i18n = await getLocaleComponentStrings(this.element);
    }
}
