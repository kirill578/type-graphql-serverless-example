const path = require("path");
const slsw = require("serverless-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: slsw.lib.entries,
    resolve: {
        extensions: [
            ".mjs",
            ".js",
            ".json",
            ".ts",
            ".tsx"
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    keep_classnames: true,
                    ecma: 6,
                },
            }),
        ],
    },
    output: {
        libraryTarget: "commonjs",
        path: path.join(__dirname, ".webpack"),
        filename: "[name].js"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],
            },
            {
                type: "javascript/auto", // required for the apollo-graphql
                test: /\.mjs$/,
                use: []
            }
        ]
    }
};


