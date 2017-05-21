import './style'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stage from './Stage'

export default class Kanban extends Component {
    render() {
        const { scrum = {}, stageIds = [], stages = {} } = this.props
        console.log(stageIds)
        return (
            <div className='kanban' onClick={() => this.props.addStage('new stage')}>
                <ol className='stage-list'>
                {
                    stageIds.map(id => <Stage key={id} stage={stages[id]} />)
                }
                </ol>
            </div>
        )
    }
}

Kanban.propTypes = {
    scrum: PropTypes.object.isRequired,
    stages: PropTypes.object.isRequired,
    stageIds: PropTypes.array.isRequired,
    addStage: PropTypes.func.isRequired,
}