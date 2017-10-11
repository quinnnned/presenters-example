import React from 'react';
import * as UI from 'react-materialize';
import Person from './Person';
import PersonLink from './PersonLink';

export default function App(props) {
    const {person} = props;
    return (
        <UI.Container>
            <h1 className="center-align">
                Organization Explorer
            </h1>
            <UI.Collapsible popout defaultActiveKey={0}>
                <UI.CollapsibleItem 
                    header={<PersonLink person={person} />} 
                    icon='person'
                    >
                    <Person person={person} />
                </UI.CollapsibleItem>
            </UI.Collapsible>
        </UI.Container>
    );
}