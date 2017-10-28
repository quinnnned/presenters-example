import {terminateEmployee} from '../../actors'
import business from '../lib/redux-business'

export default business(terminateEmployee, (state, action) => {
    const employeeToTerminate = 
        state.employeesById[action.employeeId]

    const employeeIsTopSupervisor = 
        employeeToTerminate.supervisor === null

    if (employeeIsTopSupervisor) {
        return []
    }

    return [action]
})