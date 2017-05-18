import { createAction, createActions } from 'redux-actions'

export default {
    addStage: createAction('ADD_STAGE', name => {
        const options = {
            method: 'POST',
            body: {
                name: name,
                order: 0,
            }
        }
        return fetch('http://localhost:3000/stage', options)
            .then(res => res.json())
    })
}
