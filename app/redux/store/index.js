import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'REDUCERS'
import middlewares from './middlewares'
import enhancers from './enhancers'

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(...middlewares),
        ...enhancers
    )
)

export default store