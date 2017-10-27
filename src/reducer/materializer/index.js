import * as Redux from 'redux'
import selectedEmployeeId from './selectedEmployeeId'
import employeesById from './employeesById'
import employeeIds from './employeeIds'

export default Redux.combineReducers({
    selectedEmployeeId,
    employeesById,
    employeeIds,
})