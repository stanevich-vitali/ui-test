import { Component, Element, Host, Listen, Prop, h } from "@stencil/core";
import { Theme } from "../../constants/themes";
import { getUscOutlet } from "../../utils/usc-outlet";
import ShoppingBtnSvg from "./assets/svg/USC_GlobalElement_Final.svg";
import { I18n } from "./i18n/usc-shopping-button.i18n";
import { getLocaleComponentStrings } from "../../utils/translations";
@Component({
    tag: "usc-shopping-button",
    styleUrl: "usc-shopping-button.scss",
    shadow: true
})
export class UscShoppingButton {
    @Element() element: HTMLUscShoppingButtonElement;
    /**
     * Maintains the number of items added into the cart
     */

    /**
     * Click handler
     */
    private i18n: I18n;
    @Listen("click", { capture: true })
    handleClick(e: Event) {
        e.preventDefault();
        const el = getUscOutlet();
        el.startShopping(e.currentTarget as HTMLUscShoppingButtonElement);
        // or
        // el.continueShopping(e.currentTarget as HTMLUscShoppingButtonElement);
    }

    /**
     * The theme name
     */
    @Prop() theme: string = Theme.Default;

    render() {
        return (
            <Host>
                <div style={{ display: "none" }}>{this.i18n.TOOLTIP_TEXT}</div>
                <button
                    class="usc-shopping-button"
                    innerHTML={ShoppingBtnSvg}
                ></button>
            </Host>
        );
    }

    componentDidLoad() {
        const textNode = this.element.shadowRoot
            .querySelector(".usc-shopping-button svg")
            .querySelector(".st2.st3.st4");
        getUscOutlet()
            .getStore()
            .then(store => {
                textNode.textContent = `${
                    store.getState().cart.products.length
                }`;
                store.subscribe(() => {
                    textNode.textContent = `${
                        store.getState().cart.products.length
                    }`;
                });
            });
        textNode.textContent = `${0}`;
    }

    async componentWillLoad(): Promise<void> {
        this.i18n = await getLocaleComponentStrings(this.element);
    }
}
