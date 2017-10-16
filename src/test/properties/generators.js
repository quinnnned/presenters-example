import {gen, sampleOne} from 'testcheck'
const any = Object.assign(gen.any, gen)
export default any

any.employeeId =
    any.asciiString.notEmpty()

any.name = 
    any.asciiString.notEmpty()

any.state = 
    any.uniqueArray(any.employeeId, { maxSize: 10 })
        .then( employeeIds => {
            return {
                selectedEmployeeId: (
                    employeeIds.length === 0 ? null : (
                        // Pick a random employee id to be selected
                        employeeIds[
                            sampleOne(any.intWithin(0, employeeIds.length-1))
                        ]    
                    )
                ),
                employeeIds,
                employeesById: (
                    employeeIds.reduce( (employeesById, employeeId, index) => {
                        return {
                            ...employeesById,
                            [employeeId]: {
                                employeeName: sampleOne(any.name),
                                supervisor: (index == 0) ? null : (
                                    // Grab a random earlier employeeId
                                    employeeIds[
                                        sampleOne(any.intWithin(0, index - 1))
                                    ]
                                )
                            }
                        }
                    }, {})
                )
            }
        })