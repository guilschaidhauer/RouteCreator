class Person {
    
    constructor(name, index, active) {
        this.name = name;
        this.index = index;
        this.active = active;
    }

    getTimeToPerson(person) {
        return timeMatrix[this.index][person.index];
    } 

    setActive(active) {
        this.active = active;
    }
}

