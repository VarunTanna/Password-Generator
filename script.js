// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) +min);
  } 


function randomItem(lists) {
  return lists[randomInt(0, lists.length - 1)];
  }


function generatePassword() {

  //making a prompt to ask the user how long they want their password to be
  var input = prompt("How long do you want your password to be?");
  var passwordLength = parseInt(input);

  // letting the user know that it must be between 8 and 128 characters
    if (isNaN(passwordLength)) {
    alert("Password must be atleast 8 through 128")
  

    return

  }

  // adding an if statment to make sure its between 8 and 128 and if it is not to alert them that it must be between those numbers.
  // set this up in class
  if (passwordLength > 8 && passwordLength < 128) {
    alert("Password must be between 8 and 128 characters")

    return
  }

  // setting up confrim to get input from our users.
  var num = confrim("Would you like numbers in your password?");
  var specialCharacters = confrim('Woul you like any special characters in your password?');
  var lowercase = confrim("Would you like any lowercase letters in your password?");
  var uppercase = confrim("Would you like any uppercase letts in your password?");

  // making list/catogeory with arrays for my numbers, special character and upper and lowercase letters.
  var numbList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var speicalCharactersList = ["@", "!", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", ".", ":", "/", ";", "-", ">", "<", "="]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  //creating a lists array for all my list items.
  var lists = []


  // pushing my list to the arrays when the user responds yes
  if (num === true) {
    lists.push(numbList);
  }  

  if (specialCharacters === true) {
    lists.push(speicalCharactersList);
  }

  if (lowercase === true) {
    lists.push(lowercaseList);
  }

  if (uppercase === true) {
    lists.push(uppercaseList);
  }

  //empty string to store the password
  var generatedPassword = ""


  for (var i = 0; i < passwordLength; i++) {
    var randomList = randomItem(lists)
    var randomChar = randomItem(lists)
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
