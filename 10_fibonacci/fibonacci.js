const fibonacci = function(n) {
    if (n < 0) return 'OOPS'
    let fibonacciArray = [1];
    for (let i = 1; i < n; i++) {
    fibonacciArray.push(fibonacciArray[i-1] + (fibonacciArray[i-2] || 0));
   }
   return fibonacciArray[n-1]
};

// Do not edit below this line
module.exports = fibonacci;
