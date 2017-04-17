const enhancers = []

if (__DEV__) {
    if (__COMPONENT_DEVTOOLS__) {
        const devToolsExtension = window.devToolsExtension
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension())
        }
    }
}

export default enhancers