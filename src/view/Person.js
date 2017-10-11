import React from 'react';
import * as UI from 'react-materialize';
import PersonLink from './PersonLink';
import AddSubordinateForm from './AddSubordinateForm';

export default function Person(props) {
    const {person} = props;
    return (
        <UI.Row>
            <h6>Supervisor: <PersonLink person={person.boss} /></h6>
            <br />
            <h6>Subordinates ({person.subordinateCount}):</h6>
            <UI.Collapsible popout accordion>
                { person.subordinates.map( person => 
                    <UI.CollapsibleItem 
                        key={person.key} 
                        header={
                            <span>
                                <PersonLink person={person} />
                                <a onClick={person.fire} >
                                    <UI.Icon className="red-text" right>
                                        whatshot
                                    </UI.Icon>
                                </a>
                            </span>
                        }
                        icon="person"
                        >
                        <Person person={person} />
                    </UI.CollapsibleItem>
                )}
                <UI.CollapsibleItem 
                    header="Add New Subordinate"
                    icon="person_add"
                    >
                    <AddSubordinateForm person={person} />
                </UI.CollapsibleItem>
            </UI.Collapsible>
        </UI.Row>
    )
};