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
/* clearErrors: two error message elemnts need clearing immediately after the button gets pressed */
function clearErrors() {
  document.getElementById("checkbox-error").innerText = "";
  document.getElementById("length-error").innerText = "";
}
/* inputError: display an error message in the case of invalid input */
function inputError(id, message) {
  const errorOutput = document.getElementById(id);
  errorOutput.innerText = message;
}
// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
/* createCharacterSet: add the given characters sets together according to the user input */
function createCharacterSet(choices) {
    let charactersSet = [];
    for (chosen in choices) {
        if (choices[chosen]) {
            charactersSet = charactersSet.concat(characters[chosen]);
        }
    }
    charactersSet.pop();  // for reason unknown a single undefined element is added to the end of the
                          // added array - pop is the fix for want of understanding
    return charactersSet;
}
/* createPassword: create the appropriate set of characters and add randomly chosen to the required length */ 
function createPassword(length, options) {
    let charactersChosen = createCharacterSet(options);
    let password = "";                              // initialize the password
    for (i = 1; i <= length; i++) {                 // add required number of..
      password += getRandom(charactersChosen);      // randomly chosen characters
    }
    return password;
}
/* readCheckboxes: set an options object according to the checkboxes */
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
/* validateLength: check the length is 10-62 */
function validateLength(passLength) {
  const minimumLength = 10;
  const maximumLength = 64;
  return passLength >= minimumLength
      && passLength <= maximumLength;
}
/* assign the two input elements a HANDLE EACH */
const lengthField = document.getElementById("length");
const passwordField = document.getElementById("password-output");
/* generatePassword: on button click, clear errors, check the input validity, then generate */
function generatePassword() {
    clearErrors();
    let passwordLength = Number(lengthField.value);
    if (validateLength(passwordLength)) {
      let characterOptions = readCheckboxes();
      if (characterOptions.valid()) {
          passwordField.value = createPassword(passwordLength, characterOptions);
      } else {
          inputError("checkbox-error", "please check at least one box");
      }
    } else {
      inputError("length-error", "please enter a number 10-64");
    }  
}