import React from 'react';
import * as UI from 'react-materialize';

export const handleSubmit = (person) => (event) => { 
    event.preventDefault(); 
    const field = event.target[0];
    person.addSubordinate(field.value);
    field.value = ''
}

export default function AddSubordinateForm(props) {
    const {person} = props;
    return (
        <UI.Row>
            <form 
                onSubmit={handleSubmit(person)}
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
