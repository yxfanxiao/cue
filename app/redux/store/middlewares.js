import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

const middlewares = [
    // thunkMiddleware,
    promiseMiddleware,
]

if (__DEV__) {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
}

export default middlewares