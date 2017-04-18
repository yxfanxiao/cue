import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from 'CONTAINERS/Nav'
import Content from 'CONTAINERS/Content'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Nav />
                <Content />
            </div>
        )
    }
}

export default App
