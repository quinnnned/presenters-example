import * as Redux from 'redux'

// Handle Higher-Order Business Rules. (compose applies right-to-left)
export default Redux.compose(
    require('./nonExistingEmployeesCannotBeTerminated').default,
    require('./topSupervisorCannotBeTerminated').default,
    require('./existingEmployeesCannotBeHired').default,
    require('./reassignSubordinatesOfTerminatedEmployees').default,
)