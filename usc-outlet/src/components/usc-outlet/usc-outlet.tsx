import {
    Component,
    Element,
    Host,
    Method,
    Prop,
    State,
    h
} from "@stencil/core";
import { ClickOutside } from "stencil-click-outside";
import { Theme } from "../../constants/themes";
import {
    SHOPPING_BUTTON,
    SHOPPING_CART_ROOT
} from "../../constants/components.registry";
import { getComponentClosestLanguage } from "../../utils/translations";
import { USCView } from "../../constants/usc-views.registry";
import { getUscOutlet } from "../../utils/usc-outlet";
import { getPageScus, SCU_KEY } from "../../utils/usc-anchors";
import { WidgetStore, WidgetPersistor } from "@usc-widget/types/index.store";
import { usc } from "@usc-widget/store.js";

@Component({
    tag: "usc-outlet",
    styleUrl: "usc-outlet.css",
    shadow: true
})
export class UscOutlet {
    @Element() element: HTMLUscOutletElement;

    /**
     * Maintains open/close ucs state
     */
    @State() uscHidden = true;

    /**
     * Maintains the last selected scu
     */
    @State() scu = "";

    @State() view: USCView = null;

    private store: WidgetStore;
    private persistor: WidgetPersistor;

    /**
     * Start shopping by SCU
     */
    @Method()
    async startShoppingByScu(el: HTMLElement, key = SCU_KEY) {
        this.uscHidden = false;
        this.scu = el.attributes[`data-${key}`].value;
        this.view = USCView.StartShoppingBySCU;
        getUscOutlet().scrollIntoView();
        this.renderUsc();
    }

    /**
     * Start shopping
     */
    @Method()
    async startShopping(btn: HTMLUscShoppingButtonElement) {
        this.uscHidden = false;
        this.scu = "";
        this.view = USCView.StartShopping;
        getUscOutlet().scrollIntoView();
        this.renderUsc();
        console.log(btn);
    }

    /**
     * Continue shopping
     */
    @Method()
    async continueShopping(btn: HTMLUscShoppingButtonElement) {
        this.uscHidden = false;
        this.scu = "";
        this.view = USCView.ContintueShopping;
        getUscOutlet().scrollIntoView();
        this.renderUsc();
        console.log(btn);
    }

    /**
     * Hides usc
     */
    @Method()
    async hideUsc() {
        this.uscHidden = true;
        this.scu = "";
    }

    @Method()
    async getStore() {
        return this.store;
    }

    /**
     * Hides usc on click outside
     */
    @ClickOutside({
        exclude: `${SHOPPING_BUTTON},[data-${SCU_KEY}]`
    })
    async blur() {
        this.hideUsc();
    }

    /**
     * The theme name
     */
    @Prop() theme: string = Theme.Default;

    componentDidLoad() {
        const { store, persistor } = usc.initStore();
        this.store = store;
        this.persistor = persistor;
    }

    render() {
        return <Host class={{ "is-hidden": this.uscHidden }}></Host>;
    }

    private getUscHost(): HTMLUscRootElement {
        let uscHost = this.element.shadowRoot.querySelector(
            `${SHOPPING_CART_ROOT}`
        );
        if (!uscHost) {
            uscHost = document.createElement(SHOPPING_CART_ROOT);
            (uscHost as HTMLElement).lang = getComponentClosestLanguage(
                this.element
            );
            this.element.shadowRoot.appendChild(uscHost);
        }
        return uscHost as HTMLUscRootElement;
    }

    private renderUsc() {
        this.getUscHost().renderUsc(
            {
                theme: this.theme,
                lang: getComponentClosestLanguage(this.element),
                view: this.view,
                scu: this.scu,
                scus: getPageScus()
            },
            this.store,
            this.persistor
        );
    }
}
