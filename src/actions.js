export const addSubordinate = (supervisor, name) => {
    return {
        type: "ADD_SUBORDINATE",
        supervisor,
        name
    }
}

export const navigateToPerson = (person) => {
    return {
        type: "NAVIGATE_TO_PERSON",
        person
    }
}

export const firePerson = (person) => {
    return {
        type: "FIRE_PERSON",
        person
    }
}