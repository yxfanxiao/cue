import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Kanban from 'COMPONENTS/Kanban'
import ProjectNav from './ProjectNav'
import VBox from 'STYLED/VBox'

const StyledVBox = styled(VBox)`

`

class Project extends Component {
    render() {
        const { pathname } = this.props.location
        return (
            <StyledVBox>
                <ProjectNav />
                <Kanban />
            </StyledVBox>
        )
    }
}

Project.propTypes = {
    location: PropTypes.object.isRequired  
}

export default Project
