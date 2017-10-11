const examplePerson = {
    name: 'Jesse Robertson',
    navigate: () => alert('navigate to Jesse Robertson'),
    fire: () => alert('fire Jesse Robertson'),
    boss: {
        name: "Shawn Khan",
        navigate: () => alert('navigate to Shawn Khan'),
    },
    addSubordinate: (value) => alert("add subord: " + value),
    subordinateCount: 10,
    subordinates: [
        { 
            key: 1, 
            name: "John Johnson",
            navigate: () => alert('navigate to John Johnson'),
            fire: () => alert('fire John Johnson'),
            subordinateCount: 0, 
            subordinates:[],
            addSubordinate: (value) => alert('add subord '+value+' to John')
        },
        { 
            key: 2, 
            name: "Bobby Goines",
            fire: () => alert('fire Bobby Goines'),
            navigate: () => alert('navigate to Bobby Goines'),
            subordinateCount: 0, 
            subordinates:[],
            addSubordinate: (value) => alert('add subord '+value+' to Bobby')
        }
    ]
}

//// MUTATION!!!
examplePerson.subordinates.forEach( person => {
    person.boss = examplePerson;
})

export default function presentState(state, dispatch) {
    return {
        person: examplePerson
    }
}