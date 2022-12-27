const convertToFahrenheit = function(cNum) {
  sum = (cNum * 1.8) + 32;
  const result = Math.round(sum * 10) / 10;
  return result;
};

const convertToCelsius = function(fNum) {
  sum = (fNum -32) *.5556;
  const result = Math.round(sum * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
