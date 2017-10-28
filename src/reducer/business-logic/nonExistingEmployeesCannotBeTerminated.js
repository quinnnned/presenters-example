import business from '../lib/redux-business'
import {terminateEmployee} from '../../actors'

export default business(terminateEmployee, (state, action) => {

    if (action.employeeId in state.employeesById) {
        return [action]
    }

    return []
})