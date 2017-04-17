import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from 'STORE'
import App from 'CONTAINERS/App'

// why did you update: https://github.com/garbles/why-did-you-update
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
    const { whyDidYouUpdate } = require('why-did-you-update')
    whyDidYouUpdate(React)
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.querySelector('#root')
    )
}

// mount
render(App)

// react hmr
if (module.hot) {
    module.hot.accept('CONTAINERS/App', () => render(App))
}

