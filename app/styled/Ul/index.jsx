import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.center ? 'cneter' : 'stretch'};
`


export default Ul