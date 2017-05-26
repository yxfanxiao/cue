import './style'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stage from './Stage'

export default class Kanban extends Component {
    render() {
        const { stageIds = [], stages = {} } = this.props
        return (
            <div className='kanban' onClick={() => this.props.addStage('new stage')}>
                <ol className='stage-list'>
                    { stageIds.map(id => <Stage key={id} stage={stages[id]} />) }
                    <li className='stage' key='create-new-stage'>新建任务列表</li>
                </ol>
            </div>
        )
    }
}

Kanban.propTypes = {
    stages: PropTypes.object.isRequired,
    stageIds: PropTypes.array.isRequired,
    addStage: PropTypes.func.isRequired,
}