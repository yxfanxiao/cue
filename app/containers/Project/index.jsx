import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProjectNav from './ProjectNav'
import Kanban from 'COMPONENTS/Kanban'

class Project extends Component {
    render() {
        const { pathname } = this.props.location
        return (
            <div>
                <ProjectNav />
                <Kanban />
            </div>
        )
    }
}

Project.propTypes = {
    location: PropTypes.object.isRequired  
}

export default Project
