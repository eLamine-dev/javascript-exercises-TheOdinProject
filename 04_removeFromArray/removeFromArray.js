const removeFromArray = function(givenArray, ...values) {

    values.forEach(value => {
        const index = givenArray.indexOf(value);
        if (index > -1) { // only splice array when item is found
            givenArray.splice(index, 1); // 2nd parameter means remove one item only
        }
    

    });
    
  return givenArray;

};

// Do not edit below this line
module.exports = removeFromArray;
