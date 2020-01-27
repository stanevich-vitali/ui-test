import { SHOPPING_CART_OUTLET } from "../constants/components.registry";

export function getUscOutlet(): HTMLUscOutletElement | null {
    return document.querySelector(SHOPPING_CART_OUTLET);
}

export function hasOutlet() {
    return !!getUscOutlet();
}
