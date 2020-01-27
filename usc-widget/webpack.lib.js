const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const commonConfig = require("./webpack.common");

commonConfig.module.rules.push({
    test: /\.(scss|sass)$/,
    loaders: [
        {
            loader: "style-loader",
            options: {
                // https://github.com/webpack-contrib/style-loader/issues/328
                insert: function insertAtShadowDom(element) {
                    const root = document
                        .querySelector("usc-outlet")
                        .shadowRoot.querySelector("usc-root").shadowRoot;
                    root.insertBefore(element, root.querySelector("#usc-root"));
                }
            }
        },
        {
            loader: "css-loader",
            options: {
                importLoaders: 1
            }
        },
        "sass-loader"
    ]
});

module.exports = merge(commonConfig, {
    output: {
        library: "usc",
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: "var",
        filename: "[name].js",
        auxiliaryComment: "Universal Shopping Cart React App"
    },
    entry: {
        usc: "./src/index.lib.tsx",
        store: "./src/index.store.ts"
    },
    devtool: "source-map",
    mode: "development",
    plugins: [
        new EsmWebpackPlugin(),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("http://example.com")
        })
    ]
});
