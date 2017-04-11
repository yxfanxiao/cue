import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'REDUCERS'

const store = createStore(rootReducer)

export default store