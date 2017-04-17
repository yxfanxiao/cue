import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as actionsCreators from 'ACTIONS/count'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    {this.props.count}
                    <button onClick={this.props.add}>Add</button>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, actionsCreators)(App)