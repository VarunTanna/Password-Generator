// Assignment Code
var generateBtn = document.querySelector("#generate");
// random integer from min to max

  function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  } // random value
  var rand = Math.random() 
  return Math.floor(min*(1 - rand) + rand*max);
  } 



function randomItem(lists) {
  return lists[randomInt(lists.length)];
  }


function generatePassword() {

  //making a prompt to ask the user how long they want their password to be
  var input = prompt("How long do you want your password to be?");
  var passwordLength = parseInt(input);

  // letting the user know to use a number as the first input
    if (isNaN(passwordLength)) {
    alert("Password must be a number.")
  

    return

  }

  // adding an if statment to make sure its between 8 and 128 and if it is not to alert them that it must be between those numbers.
  // set this up in class
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")

    return
  }

  // setting up confrim to get input from our users.
  var num = confirm("Would you like numbers in your password?");
  var specialCharacters = confirm("Would you like any special characters in your password?");
  var lowercase = confirm("Would you like any lowercase letters in your password?");
  var uppercase = confirm("Would you like any uppercase letts in your password?");

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

  if (specialCharacters === false && lowercase === false && uppercase === false) {
    return "test"
  }
// if the user decided to not input anything besides the length of the password we have pushed the uppercase list into it to add a filler for the amount of charcters the user wanted.
  if (lists === 0) {
    lists.push(uppercaseList);
  }



  //empty string to store the password
  var generatedPassword = ""

//where is randon list being used 
  for (var i = 0; i < passwordLength; i++) {
    var randomlist = randomItem(lists);
    var randomChar = randomItem(randomlist);
    generatedPassword += randomChar;

    
  }
  return generatedPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
