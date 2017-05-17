import { createAction, createActions } from 'redux-actions'

export default {
    add: createAction('ADD'),
    decrease: createAction('DECREASE')
}

// export const { add, decrease } =  createActions({
//     add: d => d,
//     decrease: d => d,
// })
