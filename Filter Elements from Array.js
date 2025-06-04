/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    arr.forEach( (ele, index) => {
        let take = fn(ele, index);
        if(take){
            newArr.push(ele);
        }
    } );
    return newArr;
};
