const path = require('path')
const HTMLWebpack = require('html-webpack-plugin')
const MiniCSSExtract = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:/\.(sa|c|sc)ss$/, //expressao regular - regex
                use: [
                    MiniCSSExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/i, //expressao regular - regex
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/i, // expressao regular para pegar arquivos terminados em .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i, //regex para pegar varios tipos de imagens
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCSSExtract({
            filename: 'style.css'
        })

    ]
    
}