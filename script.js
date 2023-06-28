var numericCharacters = "1234567890";
var specialCharacters = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";
var lowercaseCharacters =  "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";
var passwordLength = 0;
var passOptions = '';


// Add event listener to generate button
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  password = "";
  passwordLength = 0;
  passOptions = '';
  password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password
  }

  //creates randomly generated password
 function generatePassword(){
  createPasswordLength()
  createPasswordOptions()

  var randomNumber;
    for (let i = 0; i < passwordLength; i++){
      randomNumber = Math.floor(Math.random() * passOptions.length);
      password = password.concat(passOptions[randomNumber]);     
      }
   return password;
  
 } 

 //takes user input for length of password
function createPasswordLength() {
  passwordLength = prompt(
    "How long would like the length of your password to be? (Must be 8 - 128 characters in length)"
      );
    
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please try again, password length must be 8 - 128 characters in length"
        );
    createPasswordLength();
      }
}

//function to add options for character types in password
function createPasswordOptions() {  
  var containsSpecialCharacters = confirm(
    "Click OK to confirm include special characters."
    );
  if (containsSpecialCharacters){
    passOptions = passOptions.concat(specialCharacters)
  };

  var containsNumbers = confirm(
    "Click OK to confirm include numbers."
    );
  if (containsNumbers){
    passOptions= passOptions.concat(numericCharacters)
  }
  var containsLowercaseCharacters = confirm(
    "Click OK to confirm include lowercase characters."
     );
  if (containsLowercaseCharacters){
    passOptions = passOptions.concat(lowercaseCharacters) 
  };

  var containsUppercaseCharacters = confirm(
    "Click OK to confirm include uppercase characters."
    );
  if (containsUppercaseCharacters){
      passOptions = passOptions.concat(uppercaseCharacters) 
  };

  //if user does not select character type, the function will run again
  if (!containsLowercaseCharacters && !containsUppercaseCharacters && !containsNumbers  && !containsSpecialCharacters) {
    alert(
      "Please select at least one character type."
        );
        createPasswordOptions();
      }
}
