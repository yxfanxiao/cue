import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'REDUCERS'
import middlewares from './middlewares'
import enhancers from './enhancers'

const initialState = {
    
}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        ...enhancers
    )
)

export default store