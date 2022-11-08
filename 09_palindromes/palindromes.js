const palindromes = function (str) {
    str = str.toLocaleLowerCase();
    let strForward = '';
    let strBackward = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[a-z]/g)){
            strForward = strForward + str.charAt(i);
        }
    }
    for (let i = str.length; i >= 0; i--) {
        if (str.charAt(i).match(/[a-z]/g)){
            strBackward = strBackward + str.charAt(i);
        }
    }
    
    return strForward === strBackward;
};

// Do not edit below this line
module.exports = palindromes;
