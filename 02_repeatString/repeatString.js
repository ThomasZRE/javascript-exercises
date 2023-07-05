const repeatString = function(str, num) {
    if (num < 0) { return "ERROR"};
    var repeated = '';
    for (let i = 0; i < num; i++){
         repeated += str;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
