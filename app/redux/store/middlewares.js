import thunkMiddleware from 'redux-thunk'

const middlewares = [
    thunkMiddleware
]

if (__DEV__) {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
}

export default middlewares