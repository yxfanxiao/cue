import React from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'
import { AppContainer } from 'react-hot-loader'

render(
    // <Hello />,
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.querySelector('#root')
)

if (module.hot) {
    module.hot.accept('./components/Hello', () => {
        render(
            <AppContainer>
                <Hello />
            </AppContainer>,
            document.querySelector('#root')
        )
    })
}
