var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength;
  
  do {
    passwordLength = parseInt(window.prompt("Enter the length of the password between 8-128 characters):"));
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
  var includeLower = window.confirm("Do you want to include lowercase characters?");
  
  var includeUpper = window.confirm("Do you want to include uppercase characters?");
  
  var includeNumeric = window.confirm("Do you want to include numeric characters?");
  
  var includeSpecial = window.confirm("Do you want to include special characters?");

  var characters = "";
  
  // Conditions
  if (includeLower) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  
  if (includeUpper) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if (includeNumeric) {
    characters += "0123456789";
  }
  
  if (includeSpecial) {
    characters += "!@#$%^&*()";
  }
  
  var password = "";
  
  // Generation
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
