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
            { test: /\.jsx?$/, use: 'babel-loader' },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' } ]},
            { test: /\.less$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' } ]},
        ],
    },
    resolve: {
        modules: [ 'app', 'node_modules' ],
        extensions: [ '.js', '.jsx', '.less' ],
        alias: {
            ACTIONS: path.join(SRC, 'redux/actions'),
            REDUCERS: path.join(SRC, 'redux/reducers'),
            STORE: path.join(SRC, 'redux/store'),
            COMPONENTS: path.join(SRC, 'components'),
            STYLED: path.join(SRC, 'styled'),
            CONTAINERS: path.join(SRC, 'containers'),
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
            __COMPONENT_DEVTOOLS__: JSON.stringify(true),
            __WHY_DID_YOU_UPDATE__: JSON.stringify(false),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}
