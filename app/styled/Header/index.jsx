import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    width: ${props => props.width ? props.width : '100%'};
`

export default Header