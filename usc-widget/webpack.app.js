const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

commonConfig.module.rules.push({
    test: /\.(scss|sass)$/,
    loaders: [
        {
            loader: "style-loader",
            options: {}
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
    mode: "development",
    entry: ["./src/index.app.tsx"],
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify("http://example.com")
        })
    ]
});
