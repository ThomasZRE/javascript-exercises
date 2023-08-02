const fibonacci = function(n, next=1) {
    let pos = n - 1;
    let serie = [1, 1];

    if (!Number(n) || n < 0) return "OOPS";
    if (n > 2) {
        for (let i = n; i >= 2; i--) {
            serie.push( serie[n - i] + serie[(n - i) + 1] );
        }
    }
    return serie[pos];
};

// Colectivismo 

// Do not edit below this line
module.exports = fibonacci;
