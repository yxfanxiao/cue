import { combineReducers } from 'redux'
import count from 'REDUCERS/count'
import scrum from 'REDUCERS/scrum'
import stage from 'REDUCERS/stage'
import task from 'REDUCERS/task'

export default combineReducers({
    count,
    scrum,
    stage,
    task,
})