// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let numbers = "0123456789";
let criterias = [];

const getPasswordLength = () => {
  let input = prompt(
    "Please enter the number of characters you want for your passwrod between 8 and 125: "
  );
  let InputString = input.toString();
  let parsed = parseInt(InputString);
  
    if (parsed && parsed >= 8 && parsed < 125) {
       confirm("numer of characters is: " + parsed);
       return parsed;
    } else {
      alert("Please enter a valid numer");
      getPasswordLength();
    }
};

const getPasswordCriteria = () => {
  let firstCriteria = prompt("Would you like lower case charachters ? Y/N").toString().toLowerCase();
  if (firstCriteria === "y") {
    criterias.push(lowerCase);
  }
  else if (firstCriteria === "n") {
     confirm("Password will have no lower case characters");
  }
  else {
    alert("Please only type Y for yes or N for no")
  }
  let secondCriteria = prompt("Would you like lower case charachters ? Y/N").toString().toLowerCase();
  if (secondCriteria === "y") {
    criterias.push(lowerCase);
  }
  let thirdCriteria = prompt("Would you like special charachters ? Y/N").toString().toLowerCase();
  if (thirdCriteria === "y") {
    criterias.push(lowerCase);
  }
  let forthCriteria = prompt("Would you like special charachters ? Y/N").toString().toLowerCase();
  if (forthCriteria === "y") {
    criterias.push(lowerCase);
  }
  else if (criterias.length < 0) {
    alert("You need to choose at least one criteria ")
    return  getPasswordCriteria();
  }
  [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {};

//main function to generate the password
const generatePassword = () => {
  //get the password length
  const passwordLength = getPasswordLength();

  //get the password criteria
  const PasswordCriteria = getPasswordCriteria();
  //create random password
  const password = createRandomPassword(passwordLength, PasswordCriteria);

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
