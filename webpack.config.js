var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=1000&reload=true', path.resolve(__dirname, './src/index.tsx')],
    output: {
        publicPath: '/',
        filename: 'index.js',
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.tsx', '.ts', '.jsx', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",
                        ["@babel/plugin-transform-react-jsx", {
                            "pragma": "dom", // default pragma is React.createElement
                            "pragmaFrag": "DomFrag", // default is React.Fragment
                            "throwIfNamespace": false // defaults to true
                        }]
                    ]
                }
            }, {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}