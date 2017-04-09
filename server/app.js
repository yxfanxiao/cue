import express from 'express'
import { Router } from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

if (app.get('env') === 'development') {
    const compiler = webpack(config)
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        inline: true,
    })
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
}


// static file
app.use(express.static(path.join(process.cwd(), 'build')))

// Routers
app.use('/', (req, res, next) => {
    res.render('index')
})


export default app
