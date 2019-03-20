var peopleListElement = document.getElementById("peopleList");
var routeTableElement = document.getElementById("routeTable")

function createPeopleListCheckBox(peopleListElement, peopleList){
    for(var i=0; i<peopleList.length-1; i++){
        addPersonCheckboxToInputList(peopleListElement, peopleList[i]);
    }
}

function createInput(inputName){
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = inputName;
    input.name = inputName;
    return input;
}

function createLabel(labelForName, labelText){
    var label = document.createElement("label");
    label.for = labelForName;
    label.textContent = labelText;
    return label;
}

function addInputDivToInputList(inputDiv, input, label, peopleListElement){
    inputDiv.appendChild(input);
    inputDiv.appendChild(label);
    peopleListElement.appendChild(inputDiv);
}

function addPersonCheckboxToInputList(peopleListElement, person){
    var inputDiv = document.createElement("div");
    var input = createInput(person.id);
    var label = createLabel(person.id, person.name);
    addInputDivToInputList(inputDiv, input, label, peopleListElement);
}

function populateRouteTable(route){
    var existingTrs = routeTableElement.querySelectorAll("tr");

    for(var i=existingTrs.length-1; i>=0; i--){
        existingTrs[i].parentNode.removeChild(existingTrs[i]);
    }

    for(var i=route.length-1; i>=0; i--){
        var routePointTr = createRoutePointTr(route[i]);
        routeTableElement.appendChild(routePointTr);
    }
}

function createRoutePointTr(routePoint){
    var routePointTr = document.createElement("tr");
    routePointTr.appendChild(createTd(routePoint.time.getTimeString()));
    routePointTr.appendChild(createTd(routePoint.person.name));
    routePointTr.appendChild(createTd(routePoint.person.address));
    return routePointTr;
}

function createTd(data) {
    var td = document.createElement("td");
    td.textContent = data;
    return td;
}

createPeopleListCheckBox(peopleListElement, peopleList);