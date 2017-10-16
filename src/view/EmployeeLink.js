import React from 'react'

export default function EmployeeLink(props) {
    const {employee} = props
    return (
        <a onClick={employee.navigate} >
            {employee.name}
        </a>
    )
}