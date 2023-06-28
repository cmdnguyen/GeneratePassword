const passwordOptions = {
  numbers: "1234567890",
  specialCharacters: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};
var generateBtn = document.querySelector("#generate")
var password = "";
var passwordLength = 0;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  createPasswordLength();
  
    var passwordText = document.querySelector("#password");

    for (var i = 0; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random * passwordLength);
       password += characters.charAt(characters, specialCharacters);
   }
    passwordText.value = password;
  }
    
function createPasswordLength() {
  var passwordLength = prompt(
    "How long would like the length of your password to be? (Must be 10 - 128 characters in length)"
      );
    
  if (passwordLength < 10 || passwordLength > 128) {
    alert(
      "Please try again, password length must be 10 - 128 characters in length"
        );
    createPasswordLength();
      }
    return passwordLength;
}

function createPasswordOptions() {
  createPasswordLength();
  
  var containsSpecialCharacters = confirm(
    "Click OK to confirm include special characters."
    );
  if (containsSpecialCharacters){
    password = password + passwordOptions.specialCharacters 
  };

  var containsNumbers = confirm(
    "Click OK to confirm include numbers."
    );
    if (containsNumbers){
      password = password + passwordOptions.numbers 
    }; 

  var containsLowercaseCharacters = confirm(
    "Click OK to confirm include lowercase characters."
     );
    if (containsLowercaseCharacters){
      password = password + passwordOptions.lowercaseCharacters 
      };

  var containsUppercaseCharacters = confirm(
    "Click OK to confirm include uppercase characters."
    );
    if (containsUppercaseCharacters){
      password = password + passwordOptions.uppercaseCharacters 
      };
}

