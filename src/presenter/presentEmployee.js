import {hireEmployee, selectEmployee} from '../actors'

const getHighestEmployeeId = (state) => 
    state.employeeIds.reduce( (max, x) => Math.max(max, x) )

const getEmployeeName = (state, employeeId) =>
    state.employeesById[employeeId].employeeName

const getDirectSupervisor = (state, employeeId) =>
    state.employeesById[employeeId].supervisor

const getIsTopSupervisor = (state, employeeId) =>
     getDirectSupervisor(state, employeeId) === null

const getDirectSubordinateIds = (state, supervisor) =>
    state.employeeIds.filter( employeeId =>
        getDirectSupervisor(state, employeeId) === supervisor
    )

export default function presentEmployee(state, dispatch, employeeId, cache={}) {

    // Memoize
    if (employeeId in cache) {
        return cache[employeeId]
    }

    const employee = {}

    cache[employeeId] = employee

    employee.name = getEmployeeName(state, employeeId)

    employee.subordinates = 
        getDirectSubordinateIds(state, employeeId)
            .map( id => presentEmployee(state, dispatch, id, cache) ) 

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
            presentEmployee(
                state, 
                dispatch, 
                getDirectSupervisor(state, employeeId),
                cache
            )
    }

    return employee
}