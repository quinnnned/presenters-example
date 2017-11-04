import * as Redux from 'redux'
import initialize from '../../initialize'
import reducer from '../../reducer'

it('returns a promise-wrapped version of the store passed to it', () => {
    const store = Redux.createStore(reducer)

    initialize(store).then( promisedStore =>
        expect(promisedStore).toBe(store)
    )
})

it('returns a store with a valid state', () => 
    initialize(Redux.createStore(reducer))
        .then( store => store.getState() )
        .then( state => {
            expect(state.employeeIds.length).toBeGreaterThan(0)
            expect(state.employeeIds).toContain(state.selectedEmployeeId)
            expect(state.employeesById).toHaveProperty(`${state.selectedEmployeeId}`)
        })
)