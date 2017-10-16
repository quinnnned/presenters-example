import React from 'react'
import ReactDOM from 'react-dom'
import View from './view'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import presenter from './presenter'
import reducer from './reducer'

const PresentedView = ReactRedux.connect(
    state => ({state}),
    dispatch => ({dispatch}),
    ({state}, {dispatch}) => presenter(state, dispatch)
)(View)

const store = Redux.createStore(reducer)

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <PresentedView />
    </ReactRedux.Provider>,
    document.getElementById('root')
)

