const palindromes = function (str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = cleanedStr.length;
    for (let i = 0; i < len/2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false;
        }
  }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
