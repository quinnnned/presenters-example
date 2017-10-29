import React from 'react'
import ReactDOM from 'react-dom'
import View from './view'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import presenter from './presenter'
import reducer from './reducer'
import initialize from './initialize'

const PresentedView = 
    ReactRedux.connect(
        state => ({state}),
        dispatch => ({dispatch}),
        ({state}, {dispatch}) => {
            const props = presenter(state, dispatch)
            console.info("Presented Props:", props)
            return props
        } 
    )(View)

initialize(Redux.createStore(
    reducer, 
    "__REDUX_DEVTOOLS_EXTENSION__" in window 
        && window.__REDUX_DEVTOOLS_EXTENSION__()
)).then( store => 
    ReactDOM.render(
        <ReactRedux.Provider store={store}>
            <PresentedView />
        </ReactRedux.Provider>,
        document.getElementById('root')
    )
)