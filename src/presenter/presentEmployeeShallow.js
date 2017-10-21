export default (state, dispatch, employeeId) => {

    const stateEmployee = state.employeesById[employeeId]

    return {
        name: stateEmployee.employeeName
    }
}