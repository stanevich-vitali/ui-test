import {
    getHtmlAnchorByScu,
    hasHtmlAnchors,
    getHtmlAnchors
} from "./utils/usc-anchors";
import { hasOutlet, getUscOutlet } from "./utils/usc-outlet";
import {
    hasShoppingButtons,
    getUcsShoppingButtons
} from "./utils/ucs-shopping-button";

function parseQuery(queryString) {
    const query = {};
    const pairs = (queryString[0] === "?"
        ? queryString.substr(1)
        : queryString
    ).split("&");
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
}

const init = () => {
    if (hasHtmlAnchors()) {
        const uscOutlet = getUscOutlet();
        getHtmlAnchors().forEach(a => {
            a.addEventListener("click", e => {
                uscOutlet.startShoppingByScu(e.target as HTMLElement);
            });
        });
        const queryObj = parseQuery(location.search);
        if ((queryObj as any).scu) {
            const anchor = getHtmlAnchorByScu((queryObj as any).scu);
            if (anchor) {
                anchor.scrollIntoView();
            }
        }
        if (!hasOutlet()) {
            throw new Error(
                "Content creator, you forgot to add a ucs outlet <ucs-outlet></ucs-outlet>"
            );
        }
    } else {
        if (hasOutlet()) {
            const outlet = getUscOutlet();
            outlet.parentNode.removeChild(outlet);
        }
        if (hasShoppingButtons()) {
            Array.from(getUcsShoppingButtons()).forEach(btn => {
                btn.parentNode.removeChild(btn);
            });
        }
    }
};

if (document.readyState === "loading") {
    // eslint-disable-next-line @stencil/ban-side-effects
    document.addEventListener("DOMContentLoaded", init); // Document still loading so DomContentLoaded can still fire :)
} else {
    // eslint-disable-next-line @stencil/ban-side-effects
    init();
}
