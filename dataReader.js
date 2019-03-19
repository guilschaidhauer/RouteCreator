function getPeopleListFromJSONFile(peopleObject) {
    var peopleList = [];

    for (var i = 0; i < peopleObject.length; i++) {
        peopleList.push(createPersonFromPeopleObject(peopleObject[i]));
    } 
    
    return peopleList;
}

function getArrivalTimeFromJSONFile(arrivalTimeObject) {
    return new Time(arrivalTimeObject.hour, arrivalTimeObject.minutes);
}

function createPersonFromPeopleObject(peopleObject) {
    return new Person(peopleObject.name, peopleObject.id, peopleObject.index, peopleObject.address, peopleObject.active);
}