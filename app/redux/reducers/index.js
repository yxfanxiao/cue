import { combineReducers } from 'redux'
import count from 'REDUCERS/count'
import scrum from 'REDUCERS/scrum'
import stage from 'REDUCERS/stage'

export default combineReducers({
    count,
    scrum,
    stage,
})