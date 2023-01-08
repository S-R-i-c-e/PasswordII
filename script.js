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

function inputError(id, msg) {

}
// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

function createCharacterSet(choices) {
    let charactersSet = [];
    for (chosen in choices) {
        if (choices[chosen]) {
            charactersSet = charactersSet.concat(characters[chosen]);
        }
    }
    charactersSet.pop();
    return charactersSet;
}

function createPassword(length, options) {
    let charactersChosen = createCharacterSet(options);
    let password = "";                              // initialize the password
    for (i = 1; i <= length; i++) {             // add passLength number of..
      password += getRandom(charactersChosen);          // randomly chosen characters
    }
    return password;
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
    let characterOptions = readCheckboxes();
    if (characterOptions.valid()) {
        passwordField.value = createPassword(passwordLength, characterOptions);
    } else {
        inputError();
    }
}