const express = require('express')
const path = require('path')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

if (app.get('env') === 'development') {
    // webpack progress bar plugin's log clashed with server's launch log
    setImmediate(() => {
        const config = require('../webpack.config')
        const webpack = require('webpack')
        const webpackMiddleware = require('webpack-dev-middleware')
        const webpackHotMiddleware = require('webpack-hot-middleware')

        const compiler = webpack(config)
        const middleware = webpackMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
        app.use(middleware)
        app.use(webpackHotMiddleware(compiler))
    })
}

// static file
app.use(express.static(path.join(process.cwd(), 'build')))

// Routers
app.use('/', (req, res, next) => {
    res.render('index')
})


module.exports = app
