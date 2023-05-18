var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()";
  //var password = generatePassword();

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
  var passwordLength = createPasswordLength();
  
  var containsSpecialCharacters = confirm(
    "Click OK to confirm include special characters."
    );
}

// Assignment Code
var generateBtn = document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
