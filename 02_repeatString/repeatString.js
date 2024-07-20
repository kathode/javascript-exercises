const repeatString = function (string, repeats) {
  let output = "";

  if (repeats === 0) {
    return "";
  }

  if (repeats < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeats; i++) {
    output += string;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
