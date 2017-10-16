import {hireEmployee} from '../actors'

const defaultState = {}

export default (state = defaultState, action) => {
    const {type, employeeId, employeeName, supervisor} = action

    switch (type) {

        case hireEmployee().type:
            return {
                ...state,
                [employeeId]: { employeeName, supervisor }
            }
        
        default:
            return state

    }

}