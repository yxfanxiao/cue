import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import P from 'STYLED/P'
import Div from 'STYLED/Div'

const StyledDiv = styled(Div)`
    color: blue;

    > section {
        color: red;
    }
`

class Projects extends Component {
    render() {
        return (
            <StyledDiv>
                <P>Switch Mode: grid | list</P>
                <h6>Project 1,2,3</h6>
            </StyledDiv>
        )
    }
}

export default Projects
