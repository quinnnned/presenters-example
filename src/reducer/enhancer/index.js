import * as Redux from 'redux'
import rejectInvalidTerminations from './rejectInvalidTerminations'

export default Redux.compose(
    rejectInvalidTerminations
)