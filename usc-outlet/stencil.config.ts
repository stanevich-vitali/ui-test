import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { inlineSvg } from "stencil-inline-svg";
import {
    NAMESPACE,
    SHOPPING_BUTTON,
    SHOPPING_CART_OUTLET,
    SHOPPING_CART_ROOT
} from "./src/constants/components.registry";
export const config: Config = {
    namespace: NAMESPACE,
    bundles: [
        { components: [SHOPPING_CART_OUTLET] },
        { components: [SHOPPING_BUTTON] },
        { components: [SHOPPING_CART_ROOT] }
    ],
    outputTargets: [
        {
            type: "dist",
            esmLoaderPath: "../loader"
        },
        {
            type: "docs-readme"
        },
        {
            type: "www",
            serviceWorker: null // disable service workers
        }
    ],
    globalScript: "src/usc-page-ctrl.ts",
    globalStyle: "src/styles/global.scss",
    plugins: [sass({ includePaths: ["scr/common.scss"] }), inlineSvg()],
    copy: [
        {
            src: "../node_modules/spectre.css/dist/spectre.css",
            dest: "assets/css/spectre.css"
        },
        {
            src: "**/i18n/*.json",
            dest: "i18n"
        },
        {
            src: "assets/images/",
            dest: "assets/images/"
        },
        {
            src: "assets/fonts/",
            dest: "assets/fonts/"
        },
        {
            src: "assets/favicon.ico",
            dest: "build/favicon.ico"
        }
    ]
};
