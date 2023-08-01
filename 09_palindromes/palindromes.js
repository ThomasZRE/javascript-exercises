const palindromes = function (str) {
    let args = Array.from(str.replaceAll(/\W/g, ''));
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] !== " ")
            arr.unshift(args[i].toLowerCase());
    }
    
    let reversed = Array.from(arr.reverse());
    arr.reverse();
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reversed[i]) {
            pairs++;
        }
    }

    if (pairs === arr.length) {
        return true;
    } 
    return false;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
