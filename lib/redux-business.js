/* This could probably be a useful npm micro-module */

export default (actor, rule) => (reducer) => (state, action) => {
    
    // Only apply rule for the given action type
    if (action.type === actor().type) {
        return rule(state, action).reduce(reducer, state)
    }

    // Otherwise, proceed with normal behavior
    return reducer(state, action)
}