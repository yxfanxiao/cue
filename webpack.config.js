const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')

const SRC = path.join(process.cwd(), 'app')
const BUILD = path.join(process.cwd(), 'build')

// dev
module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(SRC, 'index.jsx'),
    ],
    output: {
        path: BUILD,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        modules: [ 'app', 'node_modules' ],
        extensions: [ '.js', '.jsx' ],
        alias: {
            ACTIONS: path.join(SRC, 'redux/actions'),
            REDUCERS:path.join(SRC, 'redux/reducers'),
            STORE:path.join(SRC, 'redux/store'),
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            __PRODUCTION__: JSON.stringify(process.env.NODE_ENV === 'production')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}
