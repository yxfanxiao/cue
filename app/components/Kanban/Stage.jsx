import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Stage extends Component {
    render() {
        const { id, name, order, created } = this.props.stage
        return (
            <li className='stage'>
            {
                id + name + order + created
            }
            {
                Array(50).fill(1).map((d, i) => <div key={i}>d</div>)

            }
            </li>
        )
    }
}

Stage.propTypes = {
    stage: PropTypes.object.isRequired,
}