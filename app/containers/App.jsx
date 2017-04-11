import React, { Component } from 'react'
import { connect } from 'react-redux'

import { add } from 'ACTIONS/count'

class App extends Component {
    render() {
        const { dispatch } = this.props
        return (
            <div className='app'>
                { this.props.count }
                <button onClick={() => dispatch(add())}>Add</button>
            </div>
        )
    }
}
function select(state) {
    return {
        count: state.count
    }
}
export default connect(select)(App)