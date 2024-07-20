const removeFromArray = function (array, ...valuesToRemove) {
  return array.filter((currentValue) => {
    return !valuesToRemove.some((removeValue) => removeValue === currentValue);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
