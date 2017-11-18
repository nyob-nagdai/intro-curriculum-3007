'use strict';

function isMultipleOfSeventeen(x) {
    if((x % 17)===0) return true;
    else return false;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
