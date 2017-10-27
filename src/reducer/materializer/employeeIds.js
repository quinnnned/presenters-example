import {hireEmployee, terminateEmployee} from '../../actors'

export default (state = [], action) => {
    const {type, employeeId} = action

    switch (type) {

        case hireEmployee().type:
            return [ ...state, employeeId ]

        case terminateEmployee().type:
            return state.filter( x => x !== employeeId )

        default:
            return state
    }
}