import * as actors from '../actors'

const defaultState = {}

export default (state = defaultState, action) => {
    const {type, employeeId, employeeName, supervisor} = action

    switch (type) {

        case actors.hireEmployee().type:
            return {
                ...state,
                [employeeId]: { employeeName, supervisor }
            }

        case actors.reassignEmployee().type:
            return {
                ...state,
                [employeeId]: {
                    ...state[employeeId],
                    supervisor
                }
            }

        case actors.terminateEmployee().type:
            const clone = {...state}
            delete clone[employeeId]
            return clone
        
        default:
            return state

    }

}