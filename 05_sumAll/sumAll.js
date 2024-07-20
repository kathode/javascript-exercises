const sumAll = function (firstRange, secondRange) {
  let sum = 0;

  if (firstRange < 0 || secondRange < 0) return "ERROR";
  if (!Number.isInteger(firstRange) || !Number.isInteger(secondRange)) return "ERROR";

  if (firstRange < secondRange) {
    for (let i = firstRange; i <= secondRange; i++) {
      sum += i;
    }
  } else {
    for (let i = secondRange; i <= firstRange; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
