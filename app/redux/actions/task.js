import { createAction, createActions } from 'redux-actions'

export default {
    deleteTask: createAction('DELETE_TASK', (taskId, stageId) => ({ taskId, stageId }))
}
