import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Projects from 'CONTAINERS/Projects'
import Project from 'CONTAINERS/Project'
import Main from 'STYLED/Main'

const StyledMain = styled(Main)`

`

export default () => (
    <StyledMain>
        <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/project/:id' component={Project} />} />
        </Switch>
    </StyledMain>
)
