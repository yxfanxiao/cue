import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default () => (
    <header className='app-header'>
        <Link to='/projects'>Projects</Link>
        <Link to='/project/1'>Project 1</Link>
        <Link to='/project/2'>Project 2</Link>
    </header>
)
