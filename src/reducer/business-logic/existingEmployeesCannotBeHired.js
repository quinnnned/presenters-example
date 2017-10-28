import business from '../lib/redux-business'
import {hireEmployee} from '../../actors'

export default business(hireEmployee, (state, action) => {

    if (action.employeeId in state.employeesById) {
        return []
    }

    return [action]
})