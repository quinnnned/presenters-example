import any from './generators'
import reducer from '../../reducer'
import * as actors from '../../actors'
import presentEmployeeShallow from '../../presenter/presentEmployeeShallow'
require('jasmine-check').install()

describe('output properties', () => {

    const dispatch = jest.fn()

    check.it(
        `presents the employee's name exactly`,
        [any.stateWithSampledEmployeeId, any.name, any.employeeId],
        ([state, supervisor], employeeName, employeeId) => {
            expect(
                presentEmployeeShallow(
                    reducer(
                        state,
                        actors.hireEmployee(
                            employeeId,
                            employeeName,
                            supervisor
                        )
                    ),
                    dispatch,
                    employeeId
                ).name
            ).toEqual(
                employeeName
            )
        }
    )
})