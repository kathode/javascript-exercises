const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (values) {
  return values.reduce((total, current) => total + current, 0);
};

const multiply = function (values) {
  return values.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (value) {
  let j = 1;
  for (let i = value; i > 0; i--) {
    j = i * j;
  }

  return j;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
