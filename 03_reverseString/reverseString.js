const reverseString = function(str) {
    var output = '';
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output.substring(0);
};

// Do not edit below this line
module.exports = reverseString;
