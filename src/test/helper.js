export const exampleEmployee = {
    name: 'Robert Robertson',
    navigate: () => alert('navigate to Robert Robertson'),
    fire: () => alert('fire Robert Robertson'),
    boss: {
        name: "Bossy Bosserson",
        navigate: () => alert("navigate to Bossy McBosserson"),
    },
    addSubordinate: (value) => alert("add subord: " + value),
    subordinateCount: 2,
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
            name: "Bobby Bobberson",
            fire: () => alert('fire Bobby Bobberson'),
            navigate: () => alert('navigate to Bobby Bobberson'),
            subordinateCount: 0, 
            subordinates:[],
            addSubordinate: (value) => alert('add subord '+value+' to Bobby')
        }
    ]
}

//// MUTATION!!!
exampleEmployee.subordinates.forEach( person => {
    person.boss = exampleEmployee;
})