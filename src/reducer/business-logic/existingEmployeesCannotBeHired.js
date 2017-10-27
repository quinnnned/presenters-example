import {hireEmployee} from '../../actors'

export default (reducer) => (state, action) => {
    const {type, employeeId} = action

    if (type === hireEmployee().type) {
        if (employeeId in state.employeesById) {
            return state
        } 
    }

    return reducer(state, action)
}