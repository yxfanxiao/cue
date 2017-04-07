import express from 'express'
import { Router } from 'express'
import path from 'path'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// develpoment or production environment
app.set('dev', process.env.NODE_ENV !== 'production')

// static file
app.use(express.static(path.join(process.cwd(), 'build')))

// Routers
app.use('/', (req, res, next) => {
    res.render('index')
})


export default app
