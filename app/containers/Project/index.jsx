import './style'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProjectNav from './ProjectNav'
import Kanban from 'COMPONENTS/Kanban'
import scrumActionCreators from 'ACTIONS/scrum'

@connect(
    state => ({
        scrum: state.scrum,
    }),
    scrumActionCreators,
)

export default class Project extends Component {
    render() {
        return (
            <div className='project'>
                <ProjectNav />
                <Kanban scrum={this.props.scrum} addStage={this.props.addStage} />
            </div>
        )
    }
}

Project.propTypes = {
    location: PropTypes.object.isRequired,
}
