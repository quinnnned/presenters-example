export const hireEmployee = (employeeId, employeeName, supervisor) => {
    return {
        type: "HIRE_EMPLOYEE",
        employeeId,
        employeeName,
        supervisor,
    }
}

export const selectEmployee = (employeeId) => {
    return {
        type: "SELECT_EMPLOYEE",
        employeeId,
    }
}

export const terminateEmployee = (employeeId) => {
    return {
        type: "TERMINATE_EMPLOYEE",
        employeeId,
    }
}

export const reassignEmployee = (employeeId, supervisor) => {
    return {
        type: "REASSIGN_EMPLOYEE",
        employeeId,
        supervisor
    }
}