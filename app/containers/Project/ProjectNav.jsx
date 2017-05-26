import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Icon from 'COMPONENTS/Icon'

class ProjectNav extends Component {
    render() {
        return (
            <nav className='project-nav'>
                <header>
                    <span>Project Nav</span>
                    <Icon name='favorite' />
                </header>
            </nav>
        )
    }
}

export default ProjectNav
