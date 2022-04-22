// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let numbers = "0123456789";
let criterias = [];
let passwordLength;
const getPasswordLength = () => {
  let input = prompt(
    "Please enter the number of characters you want for your passwrod between 8 and 125: "
  );
  let InputString = input.toString();
  let parsed = parseInt(InputString);
  
    if (parsed && parsed >= 8 && parsed < 125) {
       confirm("number of characters is: " + parsed);
       return parsed;
    } else {
      alert("Please enter a valid number e.g(12)");
      getPasswordLength();
    }
};
const getPasswordCriteria = () => {
  let criteria = "y";
  let firstCriteria = prompt("Would you like lower case charachters ? Y/N").toString().toLowerCase();
  if (firstCriteria === criteria) {
    criterias.push(lowerCase);
  }
  let secondCriteria = prompt("Would you like upper case charachters ? Y/N").toString().toLowerCase();
  if (secondCriteria === criteria) {
    criterias.push(upperCase);
  }
  let thirdCriteria = prompt("Would you like special charachters ? Y/N").toString().toLowerCase();
  if (thirdCriteria === criteria) {
    criterias.push(specialChar);
  }
  let forthCriteria = prompt("Would you like numbers ? Y/N").toString().toLowerCase();
  if (forthCriteria === criteria) {
    criterias.push(numbers);
  }
  else if (criterias.length < 1) {
    alert("You need to choose at least one criteria and make sure type in only Y for yes or N for no");
    getPasswordCriteria();
  } 
      confirm("Your password will be a random combination of " + criterias);
      return criterias;
  
};
let result = "";
const createRandomPassword = (length,criterias) => {
  let i = 0;
  while (i < length) {
    result += criterias[i]
    i++
  }
  return result;
 
};

//main function to generate the password
const generatePassword = () => {
  //get the password length
  const passwordLength = getPasswordLength();

  //get the password criteria
  const PasswordCriteria = getPasswordCriteria();
  //create random password
  const password = createRandomPassword(passwordLength, PasswordCriteria);

  //return password;
  console.log(password)
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
