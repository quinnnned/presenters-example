import * as actors from '../../actors'

const getSupervisor = (state, employeeId) =>
    state.employeesById[employeeId].supervisor

const getDirectSubordinates = (state, supervisor) =>
    state.employeeIds.filter( employeeId =>
        getSupervisor(state, employeeId) === supervisor
    )

export default (reducer) => (state, action) => {

    if (action.type === actors.terminateEmployee().type) {
        const employeeToTerminate = action.employeeId
        
        const reassignmentActions = 
            getDirectSubordinates(state, employeeToTerminate)
                .map( employeeId => actors.reassignEmployee(
                    employeeId,
                    getSupervisor(state, employeeToTerminate)
                ))

        return [ action, ...reassignmentActions ].reduce(reducer, state)
    }

    return reducer(state, action)
}