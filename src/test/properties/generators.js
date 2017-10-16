import {gen} from 'testcheck'
const any = {...gen}
export default any

any.employeeId =
    any.asciiString.notEmpty()

any.state = 
    any.object({
        selectedEmployeeId: 
            any.oneOf([
                any.employeeId, 
                null
            ])
    })