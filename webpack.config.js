/**
 * @file webpack.config.js
 * @author MengyunLee
 */

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            './src/index.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        }]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname),
            'Page': path.resolve(__dirname, './src/page'),
            'Router': path.resolve(__dirname, './src/router'),
            'Common': path.resolve(__dirname, './src/common'),
            'Component': path.resolve(__dirname, './src/component'),
        }
    }
};