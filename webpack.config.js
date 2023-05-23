const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'bundle.js',
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: "defaults",
                                }
                            ],
                            "@babel/preset-react",
                        ]
                    }
                }
            },
            {
                test:/\.s[ac]ss$/,
                include: path.resolve(__dirname, "client"),
                exlude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/public/index.html'
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, 'client/public'),
        port: 3000,
        proxy: {
            '/api': 'http://localhost:5000',
        }
    }
}