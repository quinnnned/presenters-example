import any from './generators'
import reducer from '../../reducer'
import * as actors from '../../actors'
require('jasmine-check').install()

check.it(
    `reducing a selectEmployee action produces a new state where the selected
    employee id equals the id passed to the selectEmployee actor`,
    {times: 10},
    [any.state, any.employeeId],
    (state, employeeId) => {

        // Define State Updater
        const f = state => 
            reducer(
                state,
                actors.selectEmployee(
                    employeeId
                )
            )

        // Define Selector
        const g = state => state.selectedEmployeeId

        expect( g(f(state)) ).toEqual( employeeId )
    }
)

check.it(
    `selectEmployee actions are idempotent`, 
    {times: 10},
    [any.state, any.employeeId],
    (state, employeeId) => {
        
        // Define State Updater
        const f = state => 
            reducer(
                state,
                actors.selectEmployee(
                    employeeId
                )
            )

        expect( f(f(state)) ).toEqual( f(state) )
    }
)

check.it(
    `reducing a hireEmployee action produces a new state containing the 
    specified employee`,
    [any.state, any.employeeId, any.name, any.employeeId],
    (state, employeeId, employeeName, supervisor) => {
    
        // Define State Updater
        const f = state => 
            reducer(
                state, 
                actors.hireEmployee(
                    employeeId, 
                    employeeName, 
                    supervisor 
                )
            )

        // Define Name Selector
        const g = state => state.employeesById[employeeId].employeeName
        
        // Define Supervisor Selector
        const h = state => state.employeesById[employeeId].supervisor

        // Define Membership Predicate
        const P = state => !!~state.employeeIds.indexOf(employeeId)

        expect( g(f(state)) ).toEqual(employeeName)
        expect( h(f(state)) ).toEqual(supervisor)
        expect( P(f(state)) ).toEqual(true)
    }
)

check.it(
    `hireEmployee actions are idempotent`,
    [any.state, any.employeeId, any.name, any.employeeId],
    (state, employeeId, employeeName, supervisor) => {
        
        // Define State Updater
        const f = state => 
            reducer(
                state, 
                actors.hireEmployee(
                    employeeId, 
                    employeeName, 
                    supervisor 
                )
            )

        expect( f(f(state)) ).toEqual( f(state) )
    }
)

check.it(
    `terminateEmployee is the left inverse of hireEmployee`,
    any.state.then( state => [
        state, 
        any.employeeId.suchThat( x => state.employesById[x] === undefined ),
        any.name,
        any.oneOf(state.employeeIds)
    ]),
    ([state, employeeId, employeeName, supervisor]) => {

        // Define Hire State Updater
        const f = state => 
            reducer(
                state,
                actors.hireEmployee(
                    employeeId,
                    employeeName,
                    supervisor
                )
            )

        // Define Terminate State Updater
        const g = state => 
            reducer(
                state,
                actors.terminateEmployee(
                    employeeId
                )
            )

        expect( g(f(state)) ).toEqual(state)
        
    }
)

check.it(
    `The top supervisor cannot be terminated`,
    any.state,
    (state) => {

        // Get EmployeeId of Top Supervisor
        const employeeId = state.employeeIds.find( employeeId => 
            state.employeesById[employeeId].supervisor === null
        )

        // Define State Updater
        const f = state => 
            reducer(
                state,
                actors.terminateEmployee(
                    employeeId
                )
            )
        
        expect(f(state)).toEqual(state)
    }
)

check.it(
    `terminateEmployee actions are idempotent`,
    any.state.then( state => [state, any.oneOf(state.employeeIds) ]),
    ([state, employeeId]) => {

        // Define State Updater
        const f = state => 
            reducer(
                state,
                actors.terminateEmployee(
                    employeeId
                )
            )
        
        expect( f(f(state)) ).toEqual( f(state) )
    }
)


/*


*/
check.it(
    `when a supervisor's employee is terminated, the total size of their 
    subordinate tree decreases by one`,
    any.state.suchThat( state => state.employeeIds.length > 1).then( state => 
        any.oneOf(state.employeeIds)
            .suchThat( employeeId => 
                state.employeesById[employeeId].supervisor !== null
            )
            .then( employeeId => [ state, employeeId ])
    ),
    ([state, employeeIdToTerminate]) => {

        const e = employeeIdToTerminate

        // Define State Updater
        const f = state =>
            reducer(
                state,
                actors.terminateEmployee(
                    employeeIdToTerminate
                )
            )
        
        // Define Supervisor Selector 
        const sup = (state, employeeId) =>
            state.employeesById[employeeId].supervisor

        // Define Recursive Subordinate Tree Size Calculator
        const size = (state, supervisor) =>
            state.employeeIds
                // Get Direct Subordinates
                .filter( employeeId => sup(state, employeeId) === supervisor )
                // Tally Each Subordinate, Plus Its Subordinate Tree 
                .map( employeeId => 1 + size(state, employeeId) )
                // Sum
                .reduce( (a,b) => a + b, 0)

        expect( size( f(state), sup(state, e) ) )
            .toEqual( size(state, sup(state, e) ) - 1)
    }
)