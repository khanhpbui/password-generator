// Assignment Code
var generateBtn = document.querySelector("#generate");
var selectedChar = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('generatedPass',password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var generatedPass = [];
  
  //Prompt the user to pick the password's length
  var passLength = parseInt(prompt('Please enter the length of your password (min:8/max:128):'));

  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
    //GOT VALUE OF PASSLENGTH
  } else {
    alert('Please select a valid number');
    var password = "Try again."
    return password;                                                                           
  }
  
  var upCase = confirm('Would you like to include any uppercase letters in your password? (Y/N)');
  if (upCase){
    var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var randomValUpperCase = upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];
    generatedPass += randomValUpperCase;
    console.log(randomValUpperCase);
  } else{
    var upperCaseArr = [];
    console.log('The user does not want any uppercase character.');
  }

  let lowCase = confirm('Would you like to include any lowercase letters in your password? (Y/N)');
  if (lowCase){
    var lowCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomValLowCase = lowCaseArr[Math.floor(Math.random() * lowCaseArr.length)];
    generatedPass += randomValLowCase;
    console.log(randomValLowCase);
  } else{
    var lowCaseArr = [];
    console.log('The user does not want any lowercase character.')
  }

  let nums = confirm('Would you like to include any number(s) in your password? (Y/N)');
  if (nums){
    var numsArry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var randomValNums = numsArry[Math.floor(Math.random() * numsArry.length)];
    generatedPass += randomValNums;
    console.log(randomValNums);
  } else{
    var numsArry = [];
    console.log('The user does not want any number character.')
  }

  let specChar = confirm('Would you like to include any special characters(s) in your password? (Y/N)');
  if (specChar){
    var specCharArr = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
    var randomValSpecChar = specCharArr[Math.floor(Math.random() * specCharArr.length)];
    generatedPass += randomValSpecChar;
    console.log(randomValSpecChar);
  } else{
    var specCharArr = [];
    console.log('The user does not want any special character.')
  }

  if (upCase !== true && lowCase !== true && nums !== true && specChar !== true) {
    alert('Please select at least one character type');
    var password = "Try again."
    return password;
  }

let selectedChar = upperCaseArr.concat(lowCaseArr, numsArry,specCharArr);



var lengthDiff = passLength - generatedPass.length;

  for (var i = 0; i < lengthDiff; i++) {
    console.log(i);
    var randomValueFromArray = selectedChar[Math.floor(Math.random() * selectedChar.length)];
    console.log(randomValueFromArray);
    generatedPass += randomValueFromArray;
    console.log(generatedPass);
  }

  return generatedPass;
}
 
console.log(selectedChar);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);