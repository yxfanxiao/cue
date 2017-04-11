import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './containers/App'

// why did you update: https://github.com/garbles/why-did-you-update
if (!__PRODUCTION__) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#root')
    )
}

// mount
render(App)

// react hmr
if (module.hot) {
    module.hot.accept('./containers/App', () => render(App))
}

