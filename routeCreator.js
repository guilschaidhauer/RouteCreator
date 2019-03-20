var peopleList = getPeopleListFromJSONFile(peopleObject);

var arrivalTime = getArrivalTimeFromJSONFile(arrivalTimeObject);

function createRoute(peopleList) {
    var route = [];

    route.push(new RoutePoint(peopleList[peopleList.length - 1], arrivalTime));
    setPeoplesActiveStatus(peopleList);

    var offSet = peopleList.length - 2;

    for (var i = offSet; i >= 0; i--) {
        if (peopleList[i].active) {
            var tempTime = new Time(arrivalTime.hour, arrivalTime.minutes);
            route.push(new RoutePoint(peopleList[i], tempTime));
        }
    }

    for (var i = 1; i < route.length; i++) {
        var newTime = createNewTime(route[i - 1].time);
        var timeDifference = route[i].person.getTimeToPerson(route[i - 1].person);
        newTime.addTime(0, -timeDifference);
        route[i].time = newTime;
    }

    return route;
}

function printRoute(route) {
    for (var i = 0; i < route.length; i++) {
        route[i].time.printTime();
    }
}

function createNewTime(time) {
    return new Time(time.hour, time.minutes);
}

function setPeoplesActiveStatus(peopleList) {
    var peopleListElement = document.getElementById("peopleList");
    var peopleDivList = peopleListElement.querySelectorAll("input");
    for (var i = 0; i < peopleDivList.length; i++) {
        peopleList[i].setActive(peopleDivList[i].checked);
    }
}

function onCreateRouteClick() {
    var finishedRoute = createRoute(peopleList);
    populateRouteTable(finishedRoute);
    printRoute(finishedRoute);
}