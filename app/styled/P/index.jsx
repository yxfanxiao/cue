import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    color: ${props => props.color || 'black'};
`

export default P