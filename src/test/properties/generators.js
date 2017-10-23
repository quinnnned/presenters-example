import {gen, sampleOne} from 'testcheck'
const any = Object.assign(gen.any, gen)
export default any

any.employeeId =
    any.asciiString.notEmpty()

any.newEmployeeId = (state) =>
    any.employeeId.suchThat( id => !( id in state.employeesById ) )

any.name = 
    any.asciiString.notEmpty()

any.state = 
    any.uniqueArray(any.employeeId, {minSize: 1, maxSize: 5})
        .then( employeeIds => {
            const numberOfEmployees = employeeIds.length

            const selectedEmployeeId = employeeIds[
                Math.floor( Math.random() * ( numberOfEmployees - 1 ) )
            ]

            // I don't like for loops, but performance really matters here
            const employeesById = {}
            for (let i = 0; i < numberOfEmployees; i++) {
                const employeeId = employeeIds[i]
                employeesById[employeeId] = {
                    employeeName: 'John ' + employeeId,
                    supervisor: (i === 0) ? null : (
                        // Grab a random earlier employeeId
                        employeeIds[ Math.floor( Math.random() * ( i - 1 ) ) ]
                    )
                }
            }

            return {
                selectedEmployeeId,
                employeeIds,
                employeesById
            }
        })

any.stateWithSampledEmployeeId = 
    any.state.then( state => 
        any.oneOf(state.employeeIds).then( employeeId => 
            [ state, employeeId ]
        )
    )