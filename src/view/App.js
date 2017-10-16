import React from 'react'
import * as UI from 'react-materialize'
import Employee from './Employee'
import EmployeeLink from './EmployeeLink'

export default function App(props) {
    const {employee} = props
    return (
        <UI.Container>
            <h1 className="center-align">
                Organization Explorer
            </h1>
            <UI.Collapsible popout defaultActiveKey={0}>
                <UI.CollapsibleItem 
                    header={<EmployeeLink employee={employee} />} 
                    icon='person'
                    >
                    <Employee employee={employee} />
                </UI.CollapsibleItem>
            </UI.Collapsible>
        </UI.Container>
    )
}