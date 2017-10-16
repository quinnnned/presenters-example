import {gen, sampleOne} from 'testcheck'
const any = Object.assign(gen.any, gen)
export default any

any.employeeId =
    any.asciiString.notEmpty()

any.name = 
    any.asciiString.notEmpty()

any.state = 
    any.uniqueArray(any.employeeId, {maxSize: 5})
        .then( employeeIds => {
            const numberOfEmployees = employeeIds.length;

            const selectedEmployeeId = (
                numberOfEmployees === 0 ? null : (
                    // Pick a random employee id to be selected
                    employeeIds[
                        Math.floor( Math.random() * ( numberOfEmployees - 1 ) )
                    ]    
                )
            )

            // I don't like for loops, but performance really matters here
            const employeesById = {};
            for (let i = 0; i < numberOfEmployees; i++) {
                const employeeId = employeeIds[i];
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