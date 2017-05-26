import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { throttle } from 'UTILS'

export default class Stage extends Component {
    state = {
        hasScroll: false,
        items: [ 1, 2, 3, 4, 5 ]
    }

    handleScroll = ref => this._wrapperRef = ref
    handleExcludeDom = ref => this._excludeDom = ref

    handleBtnClick = e => {
        this.setState({
            items: this.state.items.slice(0, this.state.items.length - 1)
        })
        e.stopPropagation()
    }

    verifyScroll = () => {
        const hasScroll = this.state.hasScroll
            ? this._wrapperRef.clientHeight < this._wrapperRef.scrollHeight
            : this._wrapperRef.clientHeight < this._wrapperRef.scrollHeight - this._excludeDom.clientHeight

        if (hasScroll !== this.state.hasScroll) {
            this.setState({ hasScroll })
        }
    }

    throttledVerifyScroll = throttle(this.verifyScroll, 300)

    componentDidMount() {
        this.verifyScroll()
        window.addEventListener('resize', this.throttledVerifyScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledVerifyScroll)
    }

    componentDidUpdate(prevProps, prevState) {
        this.verifyScroll()
    }

    render() {
        const { id, name, order, created, tasks = [] } = this.props.stage
        const cls = cn({
            'task-creator': true,
            'fix-task-creator': this.state.hasScroll,
        })
        return (
            <li className='stage'>
                <header className='stage-header'>Header</header>
                <div className='stage-content-wrapper'>
                    <section className='stage-content' ref={this.handleScroll}>
                        <header className='task'><h1>{id}</h1><h1>{name}</h1><h1>{order}</h1></header>
                        <button onClick={this.handleBtnClick}>Click</button>
                        <ol className='tasks'>
                        {
                            this.state.items.map(id => <h1 key={id}>{id}</h1>)
                            // tasks.map((id, i) => (<li key={i} onClick={this.handleClick}>id</li>))
                        }
                        </ol>
                        <ol className='done-tasks'>
                        </ol>
                        <div className={cls} ref={this.handleExcludeDom}>Creator</div>
                    </section>
                </div>
            </li>
        )
    }
}

Stage.propTypes = {
    stage: PropTypes.object.isRequired,
}
