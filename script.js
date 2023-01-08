function generatePassword(chosenCharacterSets) {
    return true;
}

function readCheckboxes() {
    return true;
}

function validateCheckboxes(choices) {
    return true;
}


const form=document.querySelector("#password-input");

form.addEventListener("generate", function (event) {
    //prevent form submission
    event.preventDefault();

    //validate the input
    let passwordLength = form.elements["length"];
    let options = readCheckboxes();
    let checksChecked = validateCheckboxes(options);
    if (checksChecked) {
        generatePassword(options);
    }
});