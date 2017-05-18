import { handleActions } from 'redux-actions'

const initialState = {
}

export default handleActions({
}, initialState)

/*
    project: {
        _id,
        name,
        created,
        creator,
        updated,
    }

    scrum: {
        _id,
        description,
        _projectId,
    }

    stage: {
        _id,
        name,
        order,
        _scrumId,
        _creatorId,
    }
**/