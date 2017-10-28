import presentEmployeeShallow from './presentEmployeeShallow'

const getSupervisor = (state, employeeId) =>
    state.employeesById[employeeId].supervisor

const getDirectSubordinateIds = (state, supervisor) =>
    state.employeeIds.filter( employeeId =>
        getSupervisor(state, employeeId) === supervisor
    )

export default function presentEmployeeDeep(state, dispatch, employeeId) {

    const subordinates = 
        getDirectSubordinateIds(state, employeeId)
            .map( id => presentEmployeeDeep(state, dispatch, id) )  

    return {
        ...presentEmployeeShallow(state, dispatch, employeeId),
        subordinates
    }
}