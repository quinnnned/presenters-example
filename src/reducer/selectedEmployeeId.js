import {selectEmployee} from '../actors'

const defaultState = null

export default (state = defaultState, action) => {

    switch (action.type) {

        case selectEmployee().type: 
            return action.employeeId

        default: 
            return state
    }

}