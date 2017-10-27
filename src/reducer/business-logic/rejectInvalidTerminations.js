import {terminateEmployee} from '../../actors'

export default (reducer) => (state, action) => {
    
    if (action.type === terminateEmployee().type) {
        const employeeToTerminate = 
            state.employeesById[action.employeeId]

        const employeeDoesNotExist = 
            employeeToTerminate === undefined

        // Nonexistent Employees Cannot Be Terminated
        if (employeeDoesNotExist) {
            return state
        }

        const employeeIsTopSupervisor = 
            employeeToTerminate.supervisor === null
        
        // Top Supervisor Cannot Be Terminated
        if (employeeIsTopSupervisor) {
            return state
        }
    }

    return reducer(state, action)
}