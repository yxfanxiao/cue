import React, { Component } from 'react'
import styled from 'styled-components'
import VBox from 'STYLED/VBox'
import Header from './Header'
import Main from './Main'

const Wrapper = styled(VBox)`
    width: 100%;
    height: 100%;
    background: #eee;
    
    > header {
        flex: 0 0 50px;
    }

    > main {
        flex: 1 0 0;
    }
`

const App = () => (
    <Wrapper>
        <Header />
        <Main />
    </Wrapper>
)

export default App