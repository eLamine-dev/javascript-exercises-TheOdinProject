const ftoc = function(x) {

let raw = (x-32) * (5/9);
let result = parseFloat(raw.toFixed(1));
return result;

};

const ctof = function(x) {

  let raw = x *(9/5)+32;
  let result = parseFloat(raw.toFixed(1));
  return result;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
