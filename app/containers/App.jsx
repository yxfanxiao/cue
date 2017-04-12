import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import { add } from 'ACTIONS/count'

class App extends Component {
    render() {
        const { dispatch } = this.props
        return (
        <Router>
            <div className='app'>
                { this.props.count }
                <button onClick={() => dispatch(add())}>Add</button>
                <Link to='/home'>Home</Link>
                <Link to='/page'>Page</Link>

                {
                    true
                }
                <hr />
                ''
                <Route path='/home' render={()=> <button>Home</button>} />
                <hr />
                <Route path='/page' render={()=> <button>Page</button>} />
            </div>
        </Router>
        )
    }
}

function select(state) {
    return {
        count: state.count
    }
}
export default connect(select)(App)