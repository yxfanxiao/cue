import { handleActions } from 'redux-actions'

const initialState = 0

export default handleActions({
    ADD: (state, action) =>  {
        return state + action.payload
    },
    DECREASE: (state, action) => {
        return state - action.payload
    }
}, initialState)
