import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className='app-nav'>
                <header className='app-nav-header'>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/project/1'>Project 1</Link>
                    <Link to='/project/2'>Project 2</Link>
                </header>
            </nav>
        )
    }
}

export default Nav
