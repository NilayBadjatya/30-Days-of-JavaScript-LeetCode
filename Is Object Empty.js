/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // console.log(typeof Object.keys(obj));
    return Object.keys(obj).length == 0;
};
