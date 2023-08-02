const findTheOldest = function(arr) {
    arr.sort(function(a,b) {
        if (!a.yearOfDeath) a.yearOfDeath = 2023;
        if (!b.yearOfDeath) b.yearOfDeath = 2023;
        const first = a.yearOfDeath - a.yearOfBirth; 
        const next = b.yearOfDeath - b.yearOfBirth;
        return next > first ? -1 : 1;
    });
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
