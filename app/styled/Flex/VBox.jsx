import React from 'react'
import styled from 'styled-components'
import Div from 'STYLED/Div'

const VBox = styled(Div)`
    display: flex;
    flex-direction: column;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.center ? 'center' : 'stretch'};
`

export default VBox