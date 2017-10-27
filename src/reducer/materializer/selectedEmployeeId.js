import {selectEmployee} from '../../actors'

export default (state = null, action) => {
    const {type, employeeId} = action

    switch (type) {
        
        case selectEmployee().type:
            return employeeId

        default:
            return state
    }
}