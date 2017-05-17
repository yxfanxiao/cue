import './style'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stage from './Stage'

export default class Kanban extends Component {
    render() {
        const { scrum = [] } = this.props
        return (
            <div className='kanban' onClick={() => this.props.addStage('new stage')}>
            {
                // scrum.map()
                false
            }
            </div>
        )
    }
}

Kanban.propTypes = {
    scrum: PropTypes.object.isRequired,
    addStage: PropTypes.func.isRequired,
}