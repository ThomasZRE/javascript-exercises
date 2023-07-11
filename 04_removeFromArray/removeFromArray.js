const removeFromArray = function(arr, ...args) {
    let arry = []
    arr.forEach ((item) => {
        if (!args.includes(item)) {
            arry.push(item);
        }
    });
    return arry
};
// Do not edit below this line
module.exports = removeFromArray;
