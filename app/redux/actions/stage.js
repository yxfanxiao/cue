import { createAction, createActions } from 'redux-actions'

export default {
    addStage: createAction('ADD_STAGE', async name => 
        await fetch('http://localhost:3000/stage', {
            method: 'POST',
            body: {
                name: name,
                order: 0,
            }
        }).then(res => res.json()))
}
