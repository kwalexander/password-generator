// Arrays

var charLength = 10;
var charArray = [];

var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArr = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];

// Get references to the #generate element. Variable targets the #generate id, which is used in the HTML button
var generateBtn = document.querySelector("#generate");

// Event listener on the "generate" button, so that the writePassword function is called when button is clicked
generateBtn.addEventListener("click", writePassword);

// When writePassword function is called, the startPromps function runs to collect the password criteria, and if valid, will run generatePassword function to create the unique string, which is then stored as a text value for use in the #password input
function writePassword() {
    var validPrompts = startPrompts(); // will be either true or false. If true, run generatePassword and store it as `password`
 
    if (validPrompts) {
      var password = generatePassword();
  
      // #password id is used in the HTML container to display the password once generated
      var passwordText = document.querySelector("#password");

      // takes the generated value and populates the password onscreen
      passwordText.value = password;
    }
  }

// function to generate and store the password
function generatePassword() {
  // generate new password based on the prompt responses. Math.random will create a random number, multiplied times the character length provided by the user, which will then round down to the next lowest integer.
  var password = "" ;
  // loop will run as many times as the character length, ultimately creating the new password
  for(var i = 0; i < charLength; i++) {
    var randomCharacter = Math.floor(Math.random() * charArray.length)
    password = password + charArray[randomCharacter];
  }
    return password;

}

// function to prompt the user for the password criteria
function startPrompts() {
  // reset settings if the user wants to generate multiple passwords
  charArray = [];

  // function to ask for password length between 8-128, then parse the string as an integer, and store as `charLength` variable
  charLength = parseInt(prompt("How many characters do you want in your password? Select between 8 and 128"));

  // validate that user provided character length is not lower than 8, greater than 128, or not a number. If it is any of those things, trigger the invalid alert and return.
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    window.alert ("Please provide number between 8-128. Please try again.");
    return false;
  }
  
  // window prompts to ask the user if they want numbers, lowerCase, upperCase, special characters in their 
  
  if (confirm("Would you like numbers in your password?")) {
    charArray = charArray.concat(numberArr);
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    charArray = charArray.concat(lowercaseArr);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    charArray = charArray.concat(uppercaseArr);
  }

  if (confirm("Would you like special characters in your password?")) {
    charArray = charArray.concat(specialArr);
  }
  return true;
}
