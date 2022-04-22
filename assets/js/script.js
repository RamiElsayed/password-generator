// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";


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
  let criterias = [];
  let choice = "y";
  let firstCriteria = prompt("Would you like lower case charachters ? Y/N")
    .toString()
    .toLowerCase();
  if (firstCriteria === choice) {
    criterias.push(lowerCase);
  }
  let secondCriteria = prompt("Would you like upper case charachters ? Y/N")
    .toString()
    .toLowerCase();
  if (secondCriteria === choice) {
    criterias.push(upperCase);
  }
  let thirdCriteria = prompt("Would you like special charachters ? Y/N")
    .toString()
    .toLowerCase();
  if (thirdCriteria === choice) {
    criterias.push(specialChar);
  }
  let forthCriteria = prompt("Would you like numbers ? Y/N")
    .toString()
    .toLowerCase();
  if (forthCriteria === choice) {
    criterias.push(numbers);
  } else if (criterias.length < 1) {
    alert(
      "You need to choose at least one criteria and make sure type in only Y for yes or N for no"
    );
    getPasswordCriteria();
  }
  confirm("Your password will be a random combination of " + criterias);
  return criterias;

};


const createRandomPassword = (passwordLength, passwordCriteria) => {
  let result = [];
  for (let index = 0; index < passwordCriteria.length; index++) {
    const criteria = passwordCriteria[index];
    const randomChar = Math.round(Math.random() * (criteria.length - 1));
    const char = criteria[randomChar];
    result.push(char)
  }

  for(let i = passwordCriteria.length; i < passwordLength; i++) {
    const randomCriteria = Math.round(Math.random() * (passwordCriteria.length - 1))
    const criteria = passwordCriteria[randomCriteria];
    const randomChar = Math.round(Math.random() * (criteria.length - 1));
    const char = criteria[randomChar];
    result.push(char)

  }
  return result.join("");
};

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
