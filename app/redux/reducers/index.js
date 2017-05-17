import { combineReducers } from 'redux'
import count from 'REDUCERS/count'
import scrum from 'REDUCERS/scrum'

export default combineReducers({
    count,
    scrum,
})