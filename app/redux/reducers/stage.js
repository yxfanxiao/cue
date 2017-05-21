import { handleActions } from 'redux-actions'

const initialState = {
    stages: {},
    stageIds: [],
}

export default handleActions({
    ADD_STAGE: (state, action) => ({
        stages: { 
            ...state.stages, 
            [ action.payload.id ]: action.payload 
        },
        stageIds: [ 
            ...state.stageIds,
            action.payload.id
        ]
    })
}, initialState)
