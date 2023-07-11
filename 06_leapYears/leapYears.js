const leapYears = function(n) {
    if (!Number.isInteger(n) || n < 0) return false;
    if (n % 4 === 0) {
        if (n % 100 === 0 && n % 400 !== 0) return false;
        return true;
    }
    return false;
};
console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;
