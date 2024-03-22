// Assignment code here
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+=";

  let allowedChars = "";
  let code = "";

  allowedChars += includeLowercase ? lowercase : "";
  allowedChars += includeUppercase ? uppercase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length < 8 || length > 128) {
    return '(password length must be between 8 and 128 characters)';
  }

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allowedChars.length);
    code += allowedChars[random];
  }

  return code;
}

// Get references to the #generate element
var generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt('Enter the length of the password (between 8 and 128 characters):');
  var includeLowercase = confirm('Include lowercase letters?');
  var includeUppercase = confirm('Include uppercase letters?');
  var includeNumbers = confirm('Include numbers?');
  var includeSymbols = confirm('Include symbols?');
  
  var password = generatePassword(Number(passwordLength), includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
