import any from './generators'
import reducer from '../../reducer';
import * as actors from '../../actors';
require('jasmine-check').install();

check.it(
    `reducing a selectEmployee action produces a new state where the selected
    employee id equals the id passed to the selectEmployee actor`, 
    [any.state, any.employeeId],
    (state, employeeId) => {
        let r = reducer
          , s = state
          , a = actors.selectEmployee
          , x = employeeId
          , g = state => state.selectedEmployeeId

        expect( g( r( s, a(x) ) ) ).toEqual(x)
    }
)

check.it(
    `selectEmployee actions are idempotent`, 
    [any.state, any.employeeId],
    (state, employeeId) => {
        let r = reducer
          , s = state
          , a = actors.selectEmployee
          , x = employeeId

        expect( r( r( s, a(x) ), a(x) ) ).toEqual( r( s, a(x) ) )
    }
)
