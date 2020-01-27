import { SHOPPING_BUTTON } from "../constants/components.registry";

export function getUcsShoppingButtons() {
    return document.querySelectorAll(SHOPPING_BUTTON);
}

export function hasShoppingButtons() {
    return !!getUcsShoppingButtons().length;
}
