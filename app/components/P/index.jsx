import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class P extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}

P.propTypes = {
    text: PropTypes.string.isRequired
}