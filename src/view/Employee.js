import React from 'react'
import * as UI from 'react-materialize'
import EmployeeLink from './EmployeeLink'
import AddSubordinateForm from './AddSubordinateForm'

export default function Employee(props) {
    const {employee} = props
    return (
        <UI.Row>
            <h6>Supervisor: <EmployeeLink employee={employee.boss} /></h6>
            <br />
            <h6>Subordinates ({employee.subordinateCount}):</h6>
            <UI.Collapsible popout accordion>
                { employee.subordinates.map( employee => 
                    <UI.CollapsibleItem 
                        key={employee.key} 
                        header={
                            <span>
                                <EmployeeLink employee={employee} />
                                <a onClick={employee.fire} >
                                    <UI.Icon className="red-text" right>
                                        whatshot
                                    </UI.Icon>
                                </a>
                            </span>
                        }
                        icon="person"
                        >
                        <Employee employee={employee} />
                    </UI.CollapsibleItem>
                )}
                <UI.CollapsibleItem 
                    header="Add New Subordinate"
                    icon="person_add"
                    >
                    <AddSubordinateForm employee={employee} />
                </UI.CollapsibleItem>
            </UI.Collapsible>
        </UI.Row>
    )
}