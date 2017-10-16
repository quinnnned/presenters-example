import * as Redux from 'redux'
import selectedEmployeeId from './selectedEmployeeId'
import employeesById from './employeesById'
import employeeIds from './employeeIds'
import enhanceReducer from './enhancer'

export default enhanceReducer(
    Redux.combineReducers({
        selectedEmployeeId,
        employeesById,
        employeeIds,
    })
)