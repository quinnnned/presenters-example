import business from '../lib/redux-business'
import {terminateEmployee, reassignEmployee} from '../../actors'


const getSupervisor = (state, employeeId) =>
    state.employeesById[employeeId].supervisor

const getDirectSubordinates = (state, supervisor) =>
    state.employeeIds.filter( employeeId =>
        getSupervisor(state, employeeId) === supervisor
    )

export default business(terminateEmployee, (state, action) => {
   
    const supervisorOfTerminatedEmployee = 
        getSupervisor(state, action.employeeId)

    const reassignmentActions = 
        getDirectSubordinates(state, action.employeeId)
            .map( suborinateOfTerminatedEmployee => reassignEmployee(
                suborinateOfTerminatedEmployee,
                supervisorOfTerminatedEmployee
            ))

    return [action, ...reassignmentActions]
})