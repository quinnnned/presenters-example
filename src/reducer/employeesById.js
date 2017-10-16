import {hireEmployee, terminateEmployee} from '../actors'

const defaultState = {}

export default (state = defaultState, action) => {
    const {type, employeeId, employeeName, supervisor} = action

    switch (type) {

        case hireEmployee().type:
            return {
                ...state,
                [employeeId]: { employeeName, supervisor }
            }

        case terminateEmployee().type:
            const clone = {...state}
            delete clone[employeeId]
            return clone
        
        default:
            return state

    }

}