const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(args) {
  return args.reduce((n, m) => n + m, 0);
};

const multiply = function(...arr) {
  return arr.reduce((n, m) => n * m, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n == 0) return 1;
  return n * factorial(n - 1);
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
