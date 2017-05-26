import { handleActions } from 'redux-actions'

const initialState = {
    tasks: {},
}

export default handleActions({
    DELETE_TASK: (state, action) => ({
        tasks: state.tasks
    })
}, initialState)
