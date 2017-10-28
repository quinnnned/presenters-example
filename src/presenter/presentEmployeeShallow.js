import {hireEmployee, selectEmployee} from '../actors'

const getHighestEmployeeId = (state) => 
    state.employeeIds.reduce( (max, x) => Math.max(max, x) )

const getEmployeeName = (state, employeeId) =>
    state.employeesById[employeeId].employeeName

const getDirectSupervisor = (state, employeeId) =>
    state.employeesById[employeeId].supervisor

const getIsTopSupervisor = (state, employeeId) =>
     getDirectSupervisor(state, employeeId) === null

export default function presentEmployeeShallow(state, dispatch, employeeId) {

    const employee = {}

    employee.name = getEmployeeName(state, employeeId)

    employee.addSubordinate = (name) =>
        dispatch(
            hireEmployee(
                getHighestEmployeeId(state) + 1,
                name,
                employeeId
            )
        )

    employee.navigate = () => 
        dispatch(
            selectEmployee(
                employeeId
            )
        )

    if ( !getIsTopSupervisor(state, employeeId) ) {
        employee.boss = 
            presentEmployeeShallow(
                state, 
                dispatch, 
                getDirectSupervisor(state, employeeId)
            )
    }

    return employee
}