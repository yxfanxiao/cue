import React from 'react'
import styled, { css } from 'styled-components'

/* default style:
 * row, wrap, center
**/
const flex = css`
    display: flex;
    flex-direction: ${props => props.column ? 'row' : 'column'};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: ${props => props.center ? 'cneter' : 'stretch'};
`

export flex