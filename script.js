// Array of special characters to be included in password
const specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  const lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  const upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  /* assign the characters set arrays to an object for reference */
  const characters = {
    special: specialCharacters,
    numeric: numericCharacters,
    lower: lowerCasedCharacters,
    upper: upperCasedCharacters,
  };


function createCharacterSet(choices) {
    let charactersSet = [];
    for (chosen in choices) {
        if (choices[chosen]) {
            charactersSet.concat(characters[chosen]);
        }
    }
    return charactersSet;
}

function createPassword(length, options) {
    let charactersChosen = createCharacterSet(options);
    return charactersChosen;
}
function readCheckboxes() {
    let options = {
        lower: document.querySelector("#lower").checked,
        upper: document.querySelector("#upper").checked,
        numeric: document.querySelector("#numeric").checked,
        special: document.querySelector("#special").checked,
        valid: function () {
            return this.lower
                || this.upper
                || this.numeric
                || this.special;
        }
    }
    return options;
}

const lengthField = document.getElementById("length");
const passwordField = document.getElementById("password-output");

function generatePassword() {
    let passwordLength = lengthField.value;
    console.log(passwordLength);
    let characterOptions = readCheckboxes();
    if (characterOptions.valid()) {
        passwordField.value = "success";//createPassword(passwordLength, characterOptions);
    } else {
        optionsError();
    }
}
// console.log("options.lower : " + characterOptions.lower);
// console.log("options.upper : " + characterOptions.upper);
// console.log("options.numeric : " + characterOptions.numeric);
// console.log("options.special : " + characterOptions.special);
// console.log("options.valid : " + characterOptions.valid());
// const form=document.querySelector("#password-input");

// form.addEventListener("generate", function (event) {
//     //prevent form submission
//     event.preventDefault();

//     //validate the input
//     let passwordLength = form.elements["length"];
//     let options = readCheckboxes();
//     let checksChecked = validateCheckboxes(options);
//     if (checksChecked) {
//         generatePassword(options);
//     }
// });