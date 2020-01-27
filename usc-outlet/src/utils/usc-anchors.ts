export const SCU_KEY = "scu";

export function getHtmlAnchors(key = SCU_KEY) {
    return document.querySelectorAll(`[data-${key}]`);
}

export function hasHtmlAnchors() {
    return getHtmlAnchors().length;
}

export function getHtmlAnchorByScu(
    value: string,
    key: string = SCU_KEY
): Element | null {
    return Array.from(document.querySelectorAll(`[data-${key}]`)).find(a => {
        return a.attributes[`data-${key}`].value == value;
    });
}

export function getPageScus(key = SCU_KEY) {
    return Array.from(document.querySelectorAll(`[data-${key}]`))
        .map(a => {
            return a.attributes[`data-${key}`].value;
        })
        .filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
}
