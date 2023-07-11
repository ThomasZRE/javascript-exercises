const sumAll = function(init, end) {
    if (!Number.isInteger(init) || !Number.isInteger(end)) return 'ERROR';
    if (init < 0 || end < 0) return 'ERROR';
    if (end < init) {
        const tmp = init
        init = end;
        end = tmp;
    }
    let sum = 0 
    for (let i = init; i <= end; i++) {
        sum += i
    }
    return sum;
};
console.log(sumAll(5,'0'));
// Do not edit below this line
module.exports = sumAll;
