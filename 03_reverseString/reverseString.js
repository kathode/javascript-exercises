const reverseString = function (string) {
  const stringArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    stringArray.push(string[i]);
  }

  return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
