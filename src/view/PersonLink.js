import React from 'react';

export default function PersonLink(props) {
    const {person} = props;
    return (
        <a onClick={person.navigate} >
            {person.name}
        </a>
    )
}