import {hireEmployee, terminateEmployee} from '../actors'

const defaultState = []

export default (state = defaultState, action) => {
    const {type, employeeId} = action

    switch (type) {

        case hireEmployee().type:
            return (
                
                // If the state already contains the employeeId...
                ~state.indexOf(employeeId)

                    // ...then ignore
                    ? state

                    // ...otherwise append 
                    : [ ...state, employeeId ]
            )

        case terminateEmployee().type:
            return state.filter( x => x !== employeeId )

        default:
            return state
    }
}