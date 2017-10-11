import {navigateToPerson} from '../actions'

export default (state = null, action) => {

    switch (action.type) {

        case navigateToPerson().type:
            return action.person.id

        default:
            return state
    }
    
}