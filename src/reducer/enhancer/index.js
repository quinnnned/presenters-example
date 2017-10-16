import * as Redux from 'redux'

// Handle Higher-Order Business Rules. (compose applies right-to-left)
export default Redux.compose(
    require('./rejectInvalidTerminations').default,
    require('./reassignSubordinatesOfTerminatedEmployees').default,
)