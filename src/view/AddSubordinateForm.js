import React from 'react'
import * as UI from 'react-materialize'

export const handleSubmit = (employee) => (event) => { 
    event.preventDefault()
    const field = event.target[0]
    employee.addSubordinate(field.value)
    field.value = ''
}

export default function AddSubordinateForm(props) {
    const {employee} = props
    return (
        <UI.Row>
            <form 
                onSubmit={handleSubmit(employee)}
                >
                <UI.Input 
                    label="Subordinate Name"
                    required 
                    s={12} 
                    />
            </form>
        </UI.Row>
    )
}
