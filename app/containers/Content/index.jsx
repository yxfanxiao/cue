import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import P from 'Components/P'

class Content extends Component {
    render() {
        return (
            <div className='app-content'>
                <Switch>
                    <Route exact path='/projects' render={() => <P text='projects' />} />
                    <Route exact path='/project/:id' render={({ location }) => <P text={location.pathname} />} />
                </Switch>
            </div>
        )
    }
}

export default Content
