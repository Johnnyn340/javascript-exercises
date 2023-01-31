const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = array => {
 return array.reduce((total, current) => total + current, 0);
};

const multiply = array => {
  return array.reduce((total, current) => total * current);
};

const power = (a,b) => {
	return Math.pow(a,b);
};

const factorial = n => {
  if (n == 0) return 1;
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
  };


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
