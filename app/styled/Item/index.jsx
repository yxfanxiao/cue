import React from 'react'
import styled, { css } from 'styled-components'
import Div from 'STYLED/Div'

const Item = wrap(Div)`
    flex: ${props => props.width ? '0 0 ' + props.width : '1 1 0'}
`

export default Item