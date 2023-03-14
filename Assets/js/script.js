// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var length = prompt("How long would you like your password to be? (8-128 characters)");
  if (length >= 8 && length <= 128) {
  var lowercase = confirm("Would you like to include lowercases in your password?");
  var uppercase = confirm("Would you like to include Uppercases in your password?");
  var numeric = confirm("Would you like to include numbers in your password?");
  var special = confirm("Would you like to include special characters in your password?");
  var availableChar = "";
  var password = "";
  if (lowercase == true) {
    availableChar += "abcdefghijklmnopqrstuvwxyz";
  } 
  if (uppercase == true) {
    availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  if (numeric == true) {
    availableChar +="0123456789";
  } 
  if (special == true) {
    availableChar +=" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
  }
  for (var i=0; i<length; i++) {
    password += availableChar.charAt(Math.floor(Math.random() * availableChar.length));

}
return password;}
else {
  confirm("Invalid Length.");
}
}

