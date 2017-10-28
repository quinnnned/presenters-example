import presentEmployeeDeep from './presentEmployeeDeep'

export default function presentState(state, dispatch) {
    return {
        employee: presentEmployeeDeep(
            state, 
            dispatch,
            state.selectedEmployeeId
        )
    }
}