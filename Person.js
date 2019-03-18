class Person {
    
    constructor(name, id, index, address, active) {
        this.name = name;
        this.id = id;
        this.index = index;
        this.address = address;
        this.active = active;
    }

    getTimeToPerson(person) {
        return timeMatrix[this.index][person.index];
    } 

    setActive(active) {
        this.active = active;
    }
}

