import { handleActions } from 'redux-actions'

const initialState = {
    stages: {},
}

export default handleActions({
    ADD_STAGE: (state, action) => ({
        stages: { 
            ...state.stages, 
            [ action.payload.id ]: action.payload 
        }
    })
}, initialState)
