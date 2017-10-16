import * as Redux from 'redux'
import selectedEmployeeId from './selectedEmployeeId'
import employeesById from './employeesById'

export default Redux.combineReducers({
    selectedEmployeeId,
    employeesById
})