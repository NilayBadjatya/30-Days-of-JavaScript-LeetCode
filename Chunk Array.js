/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkArray = [];
    let temp = [];
    arr.forEach((val) => {
        if(temp.length < size){
            temp.push(val);
        }else if(temp.length == size){
            chunkArray.push(temp);
            temp = [];
            temp.push(val);
        }
    });
    if(temp.length > 0){
        chunkArray.push(temp);
    }
    return chunkArray;
};
