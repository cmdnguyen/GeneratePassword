# Password Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a simple password generator powered by JavaScript. It takes user input to determine how long the password should be and what type of characters used. With all of the inputs, the app will give you a randomly generated password.
This generator removes the headache of trying to think of a secure passwords and meeting the criteria from websites.
The major problem I had with this project is having to results display in the HTML. With a few tweaks in variable declarations and simplifying functions, I was able to get the app to run multiple times with a new password.

You can try it here: https://cmdnguyen.github.io/GeneratePassword/
## Installation

N/A

## Usage
When you open up the page, it should look like this.

![Starting the Page](./Images/startpage.png)

When you click on the "Generate Password" button, it will ask for the password length

![Asking for Password Length](/Images/passlength.png)

If the user puts the value out of the range or gives a blank submission, this alert should come up and ask for the password length again.

![Password Length Alert](/Images/passoptions-alert.png)

Once the user puts in an acceptable password length, the app will ask the user to confirm character types: special characters, numbers, lowercase letters and uppercase letters.

![Asking for Character Types](/Images/passoptions.png)

If the users selects cancel on all the options, this alert should come up and ask for the options again.

![Character Types Alert](/Images/passoptions-alert.png)

Once the users inputs the password length and selected the character type, it will generate the password like this.

![FinalResult](/Images/generatedpassword.png)


## Credits

Bootcamp Tutor, Alexis Gonzalez

Stack Overflow: 
  
   - https://stackoverflow.com/questions/75311161/why-is-my-password-generator-not-showing-the-result-in-the-html-box
  
   - https://stackoverflow.com/questions/70706563/javascript-password-generator-sometimes-not-including-character-selections

## License

MIT License

Copyright (c) 2023 Catherine Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
