import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Projects from 'CONTAINERS/Projects'
import Project from 'CONTAINERS/Project'

export default () => (
    <main className='app-main'>
        <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/project/:id' component={Project} />} />
        </Switch>
    </main>
)
