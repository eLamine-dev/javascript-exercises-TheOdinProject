const sumAll = function(num1, num2) {
let sum = 0;
let lower = Math.min(num1,num2);    
let upper = Math.max(num1,num2); 

if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0 ) {
    return 'ERROR' ;
   
} else  {
    for (let i = lower; i <= upper; i++) {
        sum = sum + i;  
} 
}   
return sum; 
}

// Do not edit below this line
module.exports = sumAll;
