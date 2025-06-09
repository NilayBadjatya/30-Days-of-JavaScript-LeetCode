/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    function flatten(array, d){
        for(let item of array){
            if(Array.isArray(item) && d > 0)
                flatten(item, d-1);
            else
                result.push(item);
        }
    }

    flatten(arr, n);
    return result;
};
