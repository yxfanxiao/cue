import { handleActions } from 'redux-actions'

const initialState = {
    // stage
    // { title: 'Title' }
    stages: {

    },
    stageSet: [ 'foo', 'bar' ]
}

export default handleActions({
    ADD_STAGE: (state, action) => ({
        ...state,
        stageSet: [...state.stageSet, action.payload]
    })
}, initialState)
