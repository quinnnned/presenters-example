import presentEmployee from './presentEmployee'

export default function presentState(state, dispatch) {
    return {
        employee: presentEmployee(
            state, 
            dispatch,
            state.selectedEmployeeId
        )
    }
}