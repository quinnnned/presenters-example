import any from './generators'
import reducer from '../../reducer';
import * as actors from '../../actors';
require('jasmine-check').install();

check.it(
    `reducing a selectEmployee action produces a new state where the selected
    employee id equals the id passed to the selectEmployee actor`, 
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
    [any.state, any.employeeId, any.string.notEmpty(), any.string.notEmpty()],
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

        expect( g(f(state)) ).toEqual(employeeName)
        expect( h(f(state)) ).toEqual(supervisor)
    }
)

check.it(
    `hireEmployee actions are idempotent`,
    [any.state, any.employeeId, any.string.notEmpty(), any.string.notEmpty()],
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