/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = new Map();
    this.forEach((val)=>{
        let key = fn(val);
        if(result.has(key) == false){
            result.set(key, []);
        }
        result.get(key).push(val);
    })
    return Object.fromEntries(result);
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
