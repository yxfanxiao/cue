import React from 'react'
import styled from 'styled-components'
import Div from 'STYLED/Div'
import Ul from 'STYLED/Ul'

const HBox = styled(Div)`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.center ? 'cneter' : 'stretch'};
`

HBox.Ul = styled(Ul)`
    display: flex;
    flex-direction: row;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.center ? 'cneter' : 'stretch'};
`

export default HBox