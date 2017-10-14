export const hireEmployee = (employeeId, employeeName, supervisor) => {
    return {
        type: "HIRE_EMPLOYEE",
        employeeId,
        employeeName,
        supervisor,
    }
}

export const selectEmployee = (employee) => {
    return {
        type: "SELECT_EMPLOYEE",
        employee,
    }
}

export const terminateEmployee = (employee) => {
    return {
        type: "TERMINATE_EMPLOYEE",
        employee,
    }
}