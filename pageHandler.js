var peopleListElement = document.getElementById("peopleList");

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

createPeopleListCheckBox(peopleListElement, peopleList);