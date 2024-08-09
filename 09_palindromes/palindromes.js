const palindromes = function (string) {
  let stringArray = string.replace(/[\W_]/g, "").toLowerCase().split("");

  for (let i = stringArray.length; i > 0; i--) {
    if (stringArray[i - 1] !== stringArray[stringArray.length - i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
