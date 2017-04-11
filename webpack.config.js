const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')

// dev
module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(process.cwd(), 'app/index.jsx'),
    ],
    output: {
        path: path.join(process.cwd(), 'build'),
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
