import React from 'react';
import * as UI from 'react-materialize';

export default function NewSubordinateForm(props) {
    const {person} = props;
    return (
        <UI.Row>
            <form 
                onSubmit={ e => { 
                    e.preventDefault(); 
                    const field = e.target[0];
                    person.addSubordinate(field.value); 
                    field.value = ''
                }}
                >
                <UI.Input 
                    label="Subordinate Name"
                    required 
                    s={12} 
                    />
            </form>
        </UI.Row>
    )
};
