import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from 'STYLED/Header'

const StyledHeader = styled(Header)`

`

export default () => (
    <StyledHeader>
        <Link to='/projects'>Projects</Link>
        <Link to='/project/1'>Project 1</Link>
        <Link to='/project/2'>Project 2</Link>
    </StyledHeader>
)
